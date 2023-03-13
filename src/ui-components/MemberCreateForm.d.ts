/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MemberCreateFormInputValues = {
    sub?: string;
    firstName?: string;
    middleName?: string;
    lastName?: string;
    suffix?: string;
    nickName?: string;
    birthDay?: string;
    bsaId?: string;
    active?: boolean;
    streetAddress?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    homePhone?: string;
    workPhone?: string;
    cellPhone?: string;
    emailAddress?: string;
    mailingList?: boolean;
    newsletter?: boolean;
    medFormDate?: string;
    emergencyContact1?: string;
    emergencyContact1Phone?: string;
    emergencyContact2?: string;
    emergencyContact2Phone?: string;
};
export declare type MemberCreateFormValidationValues = {
    sub?: ValidationFunction<string>;
    firstName?: ValidationFunction<string>;
    middleName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    suffix?: ValidationFunction<string>;
    nickName?: ValidationFunction<string>;
    birthDay?: ValidationFunction<string>;
    bsaId?: ValidationFunction<string>;
    active?: ValidationFunction<boolean>;
    streetAddress?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    state?: ValidationFunction<string>;
    zipCode?: ValidationFunction<string>;
    homePhone?: ValidationFunction<string>;
    workPhone?: ValidationFunction<string>;
    cellPhone?: ValidationFunction<string>;
    emailAddress?: ValidationFunction<string>;
    mailingList?: ValidationFunction<boolean>;
    newsletter?: ValidationFunction<boolean>;
    medFormDate?: ValidationFunction<string>;
    emergencyContact1?: ValidationFunction<string>;
    emergencyContact1Phone?: ValidationFunction<string>;
    emergencyContact2?: ValidationFunction<string>;
    emergencyContact2Phone?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MemberCreateFormOverridesProps = {
    MemberCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    sub?: PrimitiveOverrideProps<TextFieldProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    middleName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    suffix?: PrimitiveOverrideProps<TextFieldProps>;
    nickName?: PrimitiveOverrideProps<TextFieldProps>;
    birthDay?: PrimitiveOverrideProps<TextFieldProps>;
    bsaId?: PrimitiveOverrideProps<TextFieldProps>;
    active?: PrimitiveOverrideProps<SwitchFieldProps>;
    streetAddress?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    state?: PrimitiveOverrideProps<TextFieldProps>;
    zipCode?: PrimitiveOverrideProps<TextFieldProps>;
    homePhone?: PrimitiveOverrideProps<TextFieldProps>;
    workPhone?: PrimitiveOverrideProps<TextFieldProps>;
    cellPhone?: PrimitiveOverrideProps<TextFieldProps>;
    emailAddress?: PrimitiveOverrideProps<TextFieldProps>;
    mailingList?: PrimitiveOverrideProps<SwitchFieldProps>;
    newsletter?: PrimitiveOverrideProps<SwitchFieldProps>;
    medFormDate?: PrimitiveOverrideProps<TextFieldProps>;
    emergencyContact1?: PrimitiveOverrideProps<TextFieldProps>;
    emergencyContact1Phone?: PrimitiveOverrideProps<TextFieldProps>;
    emergencyContact2?: PrimitiveOverrideProps<TextFieldProps>;
    emergencyContact2Phone?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MemberCreateFormProps = React.PropsWithChildren<{
    overrides?: MemberCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MemberCreateFormInputValues) => MemberCreateFormInputValues;
    onSuccess?: (fields: MemberCreateFormInputValues) => void;
    onError?: (fields: MemberCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MemberCreateFormInputValues) => MemberCreateFormInputValues;
    onValidate?: MemberCreateFormValidationValues;
} & React.CSSProperties>;
export default function MemberCreateForm(props: MemberCreateFormProps): React.ReactElement;
