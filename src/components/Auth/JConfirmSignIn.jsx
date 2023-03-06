import React, {Component} from "react";
import { Form, Button, Alert,Row, Col, NavLink } from "react-bootstrap";
import { Flex } from "@aws-amplify/ui-react";
import { Auth, Logger } from "aws-amplify";

const logger = new Logger('JConfirmSignIn');

export default class JConfirmSignIn extends Component{
    constructor(props){
        super(props);
        this.confirmSignIn = this.confirmSignIn.bind(this);
        this.checkContact = this.checkContact.bind(this);
        this.changeState = this.changeState.bind(this);
        this.inputs = {};
        this.state = {error: ''};
    }

    changeState(state, data){
        const{onStateChange} = this.props;
        if(onStateChange){
            onStateChange(state, data);
        }
    }

    confirmSignIn(){
        const user = this.props.authData;
        const {code} = this.inputs;
        logger.info('Confirm sign in with ' + code);
        const mfaType = user.challengeName === 'SOFTWARE_TOKEN_MFA'
            ? 'SOFTWARE_TOKEN_MFA'
            : null;
        Auth.confirmSignIn(user, code, mfaType)
            .then(() => this.confirmSuccess(user))
            .catch(err => this.confirmError(err));
    }

    confirmSuccess(user){
        logger.info('Confirm sign in success', user);
        this.setState({error: ''});
        this.checkContact(user);
    }

    confirmError(err){
        logger.info('Confirm sign in error', err);
        this.setState({error: err.message || err});
    }

    checkContact(user){
        Auth.verifiedContact(user)
            .then(data => {
                logger.info('verified contacts', data);
                if(data.verified.isEmpty()){
                    this.changeState('signedIn', user);
                } else {
                    user = Object.assign(user,data);
                    this.changeState('verifyContact', user);
                };
            })
            .catch(err => {
                logger.info('Check verified contact error', err);
            });
    }
    
    render() {
        const {authState} = this.props;

        if(authState !== 'confirmSignIn') {return null;}

        const style = {
            width: '20rem',
            links: { fontSize: '0.9em' },
            button: { width: '100%' },
            alert: { fontSize: '0.8em' }
        }

        const {error} = this.state;

        return (
            <Flex alignItems="center">
                <Form style={style} preventDefault>
                    <Form.Input type="text" placeholder="Code" onChange={event => this.inputs.code = event.target.value} autoFocus />
                    <Row my="2" style={style.links}>
                        <Col text="left">
                            <NavLink href="#" preventDefault onClick={() => this.changeState('signIn')}>
                                Back to sign in
                            </NavLink>
                        </Col>
                        <Col text="right">
                        </Col>
                    </Row>
                    <Button primary mt="3" style={style.button} onClick={this.confirmSignIn}>
                        Confirm
                    </Button>
                    {error && <Alert warning mt="3" text="left" style={style.alert}>{error}</Alert>}
                </Form>
            </Flex>
        )
    }
}