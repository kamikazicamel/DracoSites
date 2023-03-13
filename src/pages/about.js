import React from "react";
import { MemberCreateForm } from "../ui-components";
import { PageBody } from "./PageElements";

const About = () => {
    return (
        <PageBody>
            <h1>
                This is the About Us Page
            </h1>
            <MemberCreateForm />
        </PageBody>
    );
};

export default About;