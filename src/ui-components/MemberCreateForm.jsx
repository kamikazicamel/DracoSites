/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Member } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function MemberCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    sub: "",
    firstName: "",
    middleName: "",
    lastName: "",
    suffix: "",
    nickName: "",
    birthDay: "",
    bsaId: "",
    active: false,
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    homePhone: "",
    workPhone: "",
    cellPhone: "",
    emailAddress: "",
    mailingList: false,
    newsletter: false,
    medFormDate: "",
    emergencyContact1: "",
    emergencyContact1Phone: "",
    emergencyContact2: "",
    emergencyContact2Phone: "",
  };
  const [sub, setSub] = React.useState(initialValues.sub);
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [middleName, setMiddleName] = React.useState(initialValues.middleName);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [suffix, setSuffix] = React.useState(initialValues.suffix);
  const [nickName, setNickName] = React.useState(initialValues.nickName);
  const [birthDay, setBirthDay] = React.useState(initialValues.birthDay);
  const [bsaId, setBsaId] = React.useState(initialValues.bsaId);
  const [active, setActive] = React.useState(initialValues.active);
  const [streetAddress, setStreetAddress] = React.useState(
    initialValues.streetAddress
  );
  const [city, setCity] = React.useState(initialValues.city);
  const [state, setState] = React.useState(initialValues.state);
  const [zipCode, setZipCode] = React.useState(initialValues.zipCode);
  const [homePhone, setHomePhone] = React.useState(initialValues.homePhone);
  const [workPhone, setWorkPhone] = React.useState(initialValues.workPhone);
  const [cellPhone, setCellPhone] = React.useState(initialValues.cellPhone);
  const [emailAddress, setEmailAddress] = React.useState(
    initialValues.emailAddress
  );
  const [mailingList, setMailingList] = React.useState(
    initialValues.mailingList
  );
  const [newsletter, setNewsletter] = React.useState(initialValues.newsletter);
  const [medFormDate, setMedFormDate] = React.useState(
    initialValues.medFormDate
  );
  const [emergencyContact1, setEmergencyContact1] = React.useState(
    initialValues.emergencyContact1
  );
  const [emergencyContact1Phone, setEmergencyContact1Phone] = React.useState(
    initialValues.emergencyContact1Phone
  );
  const [emergencyContact2, setEmergencyContact2] = React.useState(
    initialValues.emergencyContact2
  );
  const [emergencyContact2Phone, setEmergencyContact2Phone] = React.useState(
    initialValues.emergencyContact2Phone
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setSub(initialValues.sub);
    setFirstName(initialValues.firstName);
    setMiddleName(initialValues.middleName);
    setLastName(initialValues.lastName);
    setSuffix(initialValues.suffix);
    setNickName(initialValues.nickName);
    setBirthDay(initialValues.birthDay);
    setBsaId(initialValues.bsaId);
    setActive(initialValues.active);
    setStreetAddress(initialValues.streetAddress);
    setCity(initialValues.city);
    setState(initialValues.state);
    setZipCode(initialValues.zipCode);
    setHomePhone(initialValues.homePhone);
    setWorkPhone(initialValues.workPhone);
    setCellPhone(initialValues.cellPhone);
    setEmailAddress(initialValues.emailAddress);
    setMailingList(initialValues.mailingList);
    setNewsletter(initialValues.newsletter);
    setMedFormDate(initialValues.medFormDate);
    setEmergencyContact1(initialValues.emergencyContact1);
    setEmergencyContact1Phone(initialValues.emergencyContact1Phone);
    setEmergencyContact2(initialValues.emergencyContact2);
    setEmergencyContact2Phone(initialValues.emergencyContact2Phone);
    setErrors({});
  };
  const validations = {
    sub: [],
    firstName: [{ type: "Required" }],
    middleName: [],
    lastName: [{ type: "Required" }],
    suffix: [],
    nickName: [],
    birthDay: [],
    bsaId: [],
    active: [],
    streetAddress: [],
    city: [],
    state: [],
    zipCode: [],
    homePhone: [{ type: "Phone" }],
    workPhone: [{ type: "Phone" }],
    cellPhone: [{ type: "Phone" }],
    emailAddress: [{ type: "Email" }],
    mailingList: [],
    newsletter: [],
    medFormDate: [],
    emergencyContact1: [],
    emergencyContact1Phone: [{ type: "Phone" }],
    emergencyContact2: [],
    emergencyContact2Phone: [{ type: "Phone" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          sub,
          firstName,
          middleName,
          lastName,
          suffix,
          nickName,
          birthDay,
          bsaId,
          active,
          streetAddress,
          city,
          state,
          zipCode,
          homePhone,
          workPhone,
          cellPhone,
          emailAddress,
          mailingList,
          newsletter,
          medFormDate,
          emergencyContact1,
          emergencyContact1Phone,
          emergencyContact2,
          emergencyContact2Phone,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Member(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "MemberCreateForm")}
      {...rest}
    >
      <TextField
        label="Sub"
        isRequired={false}
        isReadOnly={false}
        value={sub}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sub: value,
              firstName,
              middleName,
              lastName,
              suffix,
              nickName,
              birthDay,
              bsaId,
              active,
              streetAddress,
              city,
              state,
              zipCode,
              homePhone,
              workPhone,
              cellPhone,
              emailAddress,
              mailingList,
              newsletter,
              medFormDate,
              emergencyContact1,
              emergencyContact1Phone,
              emergencyContact2,
              emergencyContact2Phone,
            };
            const result = onChange(modelFields);
            value = result?.sub ?? value;
          }
          if (errors.sub?.hasError) {
            runValidationTasks("sub", value);
          }
          setSub(value);
        }}
        onBlur={() => runValidationTasks("sub", sub)}
        errorMessage={errors.sub?.errorMessage}
        hasError={errors.sub?.hasError}
        {...getOverrideProps(overrides, "sub")}
      ></TextField>
      <TextField
        label="First name"
        isRequired={true}
        isReadOnly={false}
        value={firstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sub,
              firstName: value,
              middleName,
              lastName,
              suffix,
              nickName,
              birthDay,
              bsaId,
              active,
              streetAddress,
              city,
              state,
              zipCode,
              homePhone,
              workPhone,
              cellPhone,
              emailAddress,
              mailingList,
              newsletter,
              medFormDate,
              emergencyContact1,
              emergencyContact1Phone,
              emergencyContact2,
              emergencyContact2Phone,
            };
            const result = onChange(modelFields);
            value = result?.firstName ?? value;
          }
          if (errors.firstName?.hasError) {
            runValidationTasks("firstName", value);
          }
          setFirstName(value);
        }}
        onBlur={() => runValidationTasks("firstName", firstName)}
        errorMessage={errors.firstName?.errorMessage}
        hasError={errors.firstName?.hasError}
        {...getOverrideProps(overrides, "firstName")}
      ></TextField>
      <TextField
        label="Middle name"
        isRequired={false}
        isReadOnly={false}
        value={middleName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sub,
              firstName,
              middleName: value,
              lastName,
              suffix,
              nickName,
              birthDay,
              bsaId,
              active,
              streetAddress,
              city,
              state,
              zipCode,
              homePhone,
              workPhone,
              cellPhone,
              emailAddress,
              mailingList,
              newsletter,
              medFormDate,
              emergencyContact1,
              emergencyContact1Phone,
              emergencyContact2,
              emergencyContact2Phone,
            };
            const result = onChange(modelFields);
            value = result?.middleName ?? value;
          }
          if (errors.middleName?.hasError) {
            runValidationTasks("middleName", value);
          }
          setMiddleName(value);
        }}
        onBlur={() => runValidationTasks("middleName", middleName)}
        errorMessage={errors.middleName?.errorMessage}
        hasError={errors.middleName?.hasError}
        {...getOverrideProps(overrides, "middleName")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={true}
        isReadOnly={false}
        value={lastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sub,
              firstName,
              middleName,
              lastName: value,
              suffix,
              nickName,
              birthDay,
              bsaId,
              active,
              streetAddress,
              city,
              state,
              zipCode,
              homePhone,
              workPhone,
              cellPhone,
              emailAddress,
              mailingList,
              newsletter,
              medFormDate,
              emergencyContact1,
              emergencyContact1Phone,
              emergencyContact2,
              emergencyContact2Phone,
            };
            const result = onChange(modelFields);
            value = result?.lastName ?? value;
          }
          if (errors.lastName?.hasError) {
            runValidationTasks("lastName", value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks("lastName", lastName)}
        errorMessage={errors.lastName?.errorMessage}
        hasError={errors.lastName?.hasError}
        {...getOverrideProps(overrides, "lastName")}
      ></TextField>
      <TextField
        label="Suffix"
        isRequired={false}
        isReadOnly={false}
        value={suffix}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sub,
              firstName,
              middleName,
              lastName,
              suffix: value,
              nickName,
              birthDay,
              bsaId,
              active,
              streetAddress,
              city,
              state,
              zipCode,
              homePhone,
              workPhone,
              cellPhone,
              emailAddress,
              mailingList,
              newsletter,
              medFormDate,
              emergencyContact1,
              emergencyContact1Phone,
              emergencyContact2,
              emergencyContact2Phone,
            };
            const result = onChange(modelFields);
            value = result?.suffix ?? value;
          }
          if (errors.suffix?.hasError) {
            runValidationTasks("suffix", value);
          }
          setSuffix(value);
        }}
        onBlur={() => runValidationTasks("suffix", suffix)}
        errorMessage={errors.suffix?.errorMessage}
        hasError={errors.suffix?.hasError}
        {...getOverrideProps(overrides, "suffix")}
      ></TextField>
      <TextField
        label="Nick name"
        isRequired={false}
        isReadOnly={false}
        value={nickName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sub,
              firstName,
              middleName,
              lastName,
              suffix,
              nickName: value,
              birthDay,
              bsaId,
              active,
              streetAddress,
              city,
              state,
              zipCode,
              homePhone,
              workPhone,
              cellPhone,
              emailAddress,
              mailingList,
              newsletter,
              medFormDate,
              emergencyContact1,
              emergencyContact1Phone,
              emergencyContact2,
              emergencyContact2Phone,
            };
            const result = onChange(modelFields);
            value = result?.nickName ?? value;
          }
          if (errors.nickName?.hasError) {
            runValidationTasks("nickName", value);
          }
          setNickName(value);
        }}
        onBlur={() => runValidationTasks("nickName", nickName)}
        errorMessage={errors.nickName?.errorMessage}
        hasError={errors.nickName?.hasError}
        {...getOverrideProps(overrides, "nickName")}
      ></TextField>
      <TextField
        label="Birth day"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={birthDay}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sub,
              firstName,
              middleName,
              lastName,
              suffix,
              nickName,
              birthDay: value,
              bsaId,
              active,
              streetAddress,
              city,
              state,
              zipCode,
              homePhone,
              workPhone,
              cellPhone,
              emailAddress,
              mailingList,
              newsletter,
              medFormDate,
              emergencyContact1,
              emergencyContact1Phone,
              emergencyContact2,
              emergencyContact2Phone,
            };
            const result = onChange(modelFields);
            value = result?.birthDay ?? value;
          }
          if (errors.birthDay?.hasError) {
            runValidationTasks("birthDay", value);
          }
          setBirthDay(value);
        }}
        onBlur={() => runValidationTasks("birthDay", birthDay)}
        errorMessage={errors.birthDay?.errorMessage}
        hasError={errors.birthDay?.hasError}
        {...getOverrideProps(overrides, "birthDay")}
      ></TextField>
      <TextField
        label="Bsa id"
        isRequired={false}
        isReadOnly={false}
        value={bsaId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sub,
              firstName,
              middleName,
              lastName,
              suffix,
              nickName,
              birthDay,
              bsaId: value,
              active,
              streetAddress,
              city,
              state,
              zipCode,
              homePhone,
              workPhone,
              cellPhone,
              emailAddress,
              mailingList,
              newsletter,
              medFormDate,
              emergencyContact1,
              emergencyContact1Phone,
              emergencyContact2,
              emergencyContact2Phone,
            };
            const result = onChange(modelFields);
            value = result?.bsaId ?? value;
          }
          if (errors.bsaId?.hasError) {
            runValidationTasks("bsaId", value);
          }
          setBsaId(value);
        }}
        onBlur={() => runValidationTasks("bsaId", bsaId)}
        errorMessage={errors.bsaId?.errorMessage}
        hasError={errors.bsaId?.hasError}
        {...getOverrideProps(overrides, "bsaId")}
      ></TextField>
      <SwitchField
        label="Active"
        defaultChecked={false}
        isDisabled={false}
        isChecked={active}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              sub,
              firstName,
              middleName,
              lastName,
              suffix,
              nickName,
              birthDay,
              bsaId,
              active: value,
              streetAddress,
              city,
              state,
              zipCode,
              homePhone,
              workPhone,
              cellPhone,
              emailAddress,
              mailingList,
              newsletter,
              medFormDate,
              emergencyContact1,
              emergencyContact1Phone,
              emergencyContact2,
              emergencyContact2Phone,
            };
            const result = onChange(modelFields);
            value = result?.active ?? value;
          }
          if (errors.active?.hasError) {
            runValidationTasks("active", value);
          }
          setActive(value);
        }}
        onBlur={() => runValidationTasks("active", active)}
        errorMessage={errors.active?.errorMessage}
        hasError={errors.active?.hasError}
        {...getOverrideProps(overrides, "active")}
      ></SwitchField>
      <TextField
        label="Street address"
        isRequired={false}
        isReadOnly={false}
        value={streetAddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sub,
              firstName,
              middleName,
              lastName,
              suffix,
              nickName,
              birthDay,
              bsaId,
              active,
              streetAddress: value,
              city,
              state,
              zipCode,
              homePhone,
              workPhone,
              cellPhone,
              emailAddress,
              mailingList,
              newsletter,
              medFormDate,
              emergencyContact1,
              emergencyContact1Phone,
              emergencyContact2,
              emergencyContact2Phone,
            };
            const result = onChange(modelFields);
            value = result?.streetAddress ?? value;
          }
          if (errors.streetAddress?.hasError) {
            runValidationTasks("streetAddress", value);
          }
          setStreetAddress(value);
        }}
        onBlur={() => runValidationTasks("streetAddress", streetAddress)}
        errorMessage={errors.streetAddress?.errorMessage}
        hasError={errors.streetAddress?.hasError}
        {...getOverrideProps(overrides, "streetAddress")}
      ></TextField>
      <TextField
        label="City"
        isRequired={false}
        isReadOnly={false}
        value={city}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sub,
              firstName,
              middleName,
              lastName,
              suffix,
              nickName,
              birthDay,
              bsaId,
              active,
              streetAddress,
              city: value,
              state,
              zipCode,
              homePhone,
              workPhone,
              cellPhone,
              emailAddress,
              mailingList,
              newsletter,
              medFormDate,
              emergencyContact1,
              emergencyContact1Phone,
              emergencyContact2,
              emergencyContact2Phone,
            };
            const result = onChange(modelFields);
            value = result?.city ?? value;
          }
          if (errors.city?.hasError) {
            runValidationTasks("city", value);
          }
          setCity(value);
        }}
        onBlur={() => runValidationTasks("city", city)}
        errorMessage={errors.city?.errorMessage}
        hasError={errors.city?.hasError}
        {...getOverrideProps(overrides, "city")}
      ></TextField>
      <TextField
        label="State"
        isRequired={false}
        isReadOnly={false}
        value={state}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sub,
              firstName,
              middleName,
              lastName,
              suffix,
              nickName,
              birthDay,
              bsaId,
              active,
              streetAddress,
              city,
              state: value,
              zipCode,
              homePhone,
              workPhone,
              cellPhone,
              emailAddress,
              mailingList,
              newsletter,
              medFormDate,
              emergencyContact1,
              emergencyContact1Phone,
              emergencyContact2,
              emergencyContact2Phone,
            };
            const result = onChange(modelFields);
            value = result?.state ?? value;
          }
          if (errors.state?.hasError) {
            runValidationTasks("state", value);
          }
          setState(value);
        }}
        onBlur={() => runValidationTasks("state", state)}
        errorMessage={errors.state?.errorMessage}
        hasError={errors.state?.hasError}
        {...getOverrideProps(overrides, "state")}
      ></TextField>
      <TextField
        label="Zip code"
        isRequired={false}
        isReadOnly={false}
        value={zipCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sub,
              firstName,
              middleName,
              lastName,
              suffix,
              nickName,
              birthDay,
              bsaId,
              active,
              streetAddress,
              city,
              state,
              zipCode: value,
              homePhone,
              workPhone,
              cellPhone,
              emailAddress,
              mailingList,
              newsletter,
              medFormDate,
              emergencyContact1,
              emergencyContact1Phone,
              emergencyContact2,
              emergencyContact2Phone,
            };
            const result = onChange(modelFields);
            value = result?.zipCode ?? value;
          }
          if (errors.zipCode?.hasError) {
            runValidationTasks("zipCode", value);
          }
          setZipCode(value);
        }}
        onBlur={() => runValidationTasks("zipCode", zipCode)}
        errorMessage={errors.zipCode?.errorMessage}
        hasError={errors.zipCode?.hasError}
        {...getOverrideProps(overrides, "zipCode")}
      ></TextField>
      <TextField
        label="Home phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={homePhone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sub,
              firstName,
              middleName,
              lastName,
              suffix,
              nickName,
              birthDay,
              bsaId,
              active,
              streetAddress,
              city,
              state,
              zipCode,
              homePhone: value,
              workPhone,
              cellPhone,
              emailAddress,
              mailingList,
              newsletter,
              medFormDate,
              emergencyContact1,
              emergencyContact1Phone,
              emergencyContact2,
              emergencyContact2Phone,
            };
            const result = onChange(modelFields);
            value = result?.homePhone ?? value;
          }
          if (errors.homePhone?.hasError) {
            runValidationTasks("homePhone", value);
          }
          setHomePhone(value);
        }}
        onBlur={() => runValidationTasks("homePhone", homePhone)}
        errorMessage={errors.homePhone?.errorMessage}
        hasError={errors.homePhone?.hasError}
        {...getOverrideProps(overrides, "homePhone")}
      ></TextField>
      <TextField
        label="Work phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={workPhone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sub,
              firstName,
              middleName,
              lastName,
              suffix,
              nickName,
              birthDay,
              bsaId,
              active,
              streetAddress,
              city,
              state,
              zipCode,
              homePhone,
              workPhone: value,
              cellPhone,
              emailAddress,
              mailingList,
              newsletter,
              medFormDate,
              emergencyContact1,
              emergencyContact1Phone,
              emergencyContact2,
              emergencyContact2Phone,
            };
            const result = onChange(modelFields);
            value = result?.workPhone ?? value;
          }
          if (errors.workPhone?.hasError) {
            runValidationTasks("workPhone", value);
          }
          setWorkPhone(value);
        }}
        onBlur={() => runValidationTasks("workPhone", workPhone)}
        errorMessage={errors.workPhone?.errorMessage}
        hasError={errors.workPhone?.hasError}
        {...getOverrideProps(overrides, "workPhone")}
      ></TextField>
      <TextField
        label="Cell phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={cellPhone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sub,
              firstName,
              middleName,
              lastName,
              suffix,
              nickName,
              birthDay,
              bsaId,
              active,
              streetAddress,
              city,
              state,
              zipCode,
              homePhone,
              workPhone,
              cellPhone: value,
              emailAddress,
              mailingList,
              newsletter,
              medFormDate,
              emergencyContact1,
              emergencyContact1Phone,
              emergencyContact2,
              emergencyContact2Phone,
            };
            const result = onChange(modelFields);
            value = result?.cellPhone ?? value;
          }
          if (errors.cellPhone?.hasError) {
            runValidationTasks("cellPhone", value);
          }
          setCellPhone(value);
        }}
        onBlur={() => runValidationTasks("cellPhone", cellPhone)}
        errorMessage={errors.cellPhone?.errorMessage}
        hasError={errors.cellPhone?.hasError}
        {...getOverrideProps(overrides, "cellPhone")}
      ></TextField>
      <TextField
        label="Email address"
        isRequired={false}
        isReadOnly={false}
        value={emailAddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sub,
              firstName,
              middleName,
              lastName,
              suffix,
              nickName,
              birthDay,
              bsaId,
              active,
              streetAddress,
              city,
              state,
              zipCode,
              homePhone,
              workPhone,
              cellPhone,
              emailAddress: value,
              mailingList,
              newsletter,
              medFormDate,
              emergencyContact1,
              emergencyContact1Phone,
              emergencyContact2,
              emergencyContact2Phone,
            };
            const result = onChange(modelFields);
            value = result?.emailAddress ?? value;
          }
          if (errors.emailAddress?.hasError) {
            runValidationTasks("emailAddress", value);
          }
          setEmailAddress(value);
        }}
        onBlur={() => runValidationTasks("emailAddress", emailAddress)}
        errorMessage={errors.emailAddress?.errorMessage}
        hasError={errors.emailAddress?.hasError}
        {...getOverrideProps(overrides, "emailAddress")}
      ></TextField>
      <SwitchField
        label="Mailing list"
        defaultChecked={false}
        isDisabled={false}
        isChecked={mailingList}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              sub,
              firstName,
              middleName,
              lastName,
              suffix,
              nickName,
              birthDay,
              bsaId,
              active,
              streetAddress,
              city,
              state,
              zipCode,
              homePhone,
              workPhone,
              cellPhone,
              emailAddress,
              mailingList: value,
              newsletter,
              medFormDate,
              emergencyContact1,
              emergencyContact1Phone,
              emergencyContact2,
              emergencyContact2Phone,
            };
            const result = onChange(modelFields);
            value = result?.mailingList ?? value;
          }
          if (errors.mailingList?.hasError) {
            runValidationTasks("mailingList", value);
          }
          setMailingList(value);
        }}
        onBlur={() => runValidationTasks("mailingList", mailingList)}
        errorMessage={errors.mailingList?.errorMessage}
        hasError={errors.mailingList?.hasError}
        {...getOverrideProps(overrides, "mailingList")}
      ></SwitchField>
      <SwitchField
        label="Newsletter"
        defaultChecked={false}
        isDisabled={false}
        isChecked={newsletter}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              sub,
              firstName,
              middleName,
              lastName,
              suffix,
              nickName,
              birthDay,
              bsaId,
              active,
              streetAddress,
              city,
              state,
              zipCode,
              homePhone,
              workPhone,
              cellPhone,
              emailAddress,
              mailingList,
              newsletter: value,
              medFormDate,
              emergencyContact1,
              emergencyContact1Phone,
              emergencyContact2,
              emergencyContact2Phone,
            };
            const result = onChange(modelFields);
            value = result?.newsletter ?? value;
          }
          if (errors.newsletter?.hasError) {
            runValidationTasks("newsletter", value);
          }
          setNewsletter(value);
        }}
        onBlur={() => runValidationTasks("newsletter", newsletter)}
        errorMessage={errors.newsletter?.errorMessage}
        hasError={errors.newsletter?.hasError}
        {...getOverrideProps(overrides, "newsletter")}
      ></SwitchField>
      <TextField
        label="Med form date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={medFormDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sub,
              firstName,
              middleName,
              lastName,
              suffix,
              nickName,
              birthDay,
              bsaId,
              active,
              streetAddress,
              city,
              state,
              zipCode,
              homePhone,
              workPhone,
              cellPhone,
              emailAddress,
              mailingList,
              newsletter,
              medFormDate: value,
              emergencyContact1,
              emergencyContact1Phone,
              emergencyContact2,
              emergencyContact2Phone,
            };
            const result = onChange(modelFields);
            value = result?.medFormDate ?? value;
          }
          if (errors.medFormDate?.hasError) {
            runValidationTasks("medFormDate", value);
          }
          setMedFormDate(value);
        }}
        onBlur={() => runValidationTasks("medFormDate", medFormDate)}
        errorMessage={errors.medFormDate?.errorMessage}
        hasError={errors.medFormDate?.hasError}
        {...getOverrideProps(overrides, "medFormDate")}
      ></TextField>
      <TextField
        label="Emergency contact1"
        isRequired={false}
        isReadOnly={false}
        value={emergencyContact1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sub,
              firstName,
              middleName,
              lastName,
              suffix,
              nickName,
              birthDay,
              bsaId,
              active,
              streetAddress,
              city,
              state,
              zipCode,
              homePhone,
              workPhone,
              cellPhone,
              emailAddress,
              mailingList,
              newsletter,
              medFormDate,
              emergencyContact1: value,
              emergencyContact1Phone,
              emergencyContact2,
              emergencyContact2Phone,
            };
            const result = onChange(modelFields);
            value = result?.emergencyContact1 ?? value;
          }
          if (errors.emergencyContact1?.hasError) {
            runValidationTasks("emergencyContact1", value);
          }
          setEmergencyContact1(value);
        }}
        onBlur={() =>
          runValidationTasks("emergencyContact1", emergencyContact1)
        }
        errorMessage={errors.emergencyContact1?.errorMessage}
        hasError={errors.emergencyContact1?.hasError}
        {...getOverrideProps(overrides, "emergencyContact1")}
      ></TextField>
      <TextField
        label="Emergency contact1 phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={emergencyContact1Phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sub,
              firstName,
              middleName,
              lastName,
              suffix,
              nickName,
              birthDay,
              bsaId,
              active,
              streetAddress,
              city,
              state,
              zipCode,
              homePhone,
              workPhone,
              cellPhone,
              emailAddress,
              mailingList,
              newsletter,
              medFormDate,
              emergencyContact1,
              emergencyContact1Phone: value,
              emergencyContact2,
              emergencyContact2Phone,
            };
            const result = onChange(modelFields);
            value = result?.emergencyContact1Phone ?? value;
          }
          if (errors.emergencyContact1Phone?.hasError) {
            runValidationTasks("emergencyContact1Phone", value);
          }
          setEmergencyContact1Phone(value);
        }}
        onBlur={() =>
          runValidationTasks("emergencyContact1Phone", emergencyContact1Phone)
        }
        errorMessage={errors.emergencyContact1Phone?.errorMessage}
        hasError={errors.emergencyContact1Phone?.hasError}
        {...getOverrideProps(overrides, "emergencyContact1Phone")}
      ></TextField>
      <TextField
        label="Emergency contact2"
        isRequired={false}
        isReadOnly={false}
        value={emergencyContact2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sub,
              firstName,
              middleName,
              lastName,
              suffix,
              nickName,
              birthDay,
              bsaId,
              active,
              streetAddress,
              city,
              state,
              zipCode,
              homePhone,
              workPhone,
              cellPhone,
              emailAddress,
              mailingList,
              newsletter,
              medFormDate,
              emergencyContact1,
              emergencyContact1Phone,
              emergencyContact2: value,
              emergencyContact2Phone,
            };
            const result = onChange(modelFields);
            value = result?.emergencyContact2 ?? value;
          }
          if (errors.emergencyContact2?.hasError) {
            runValidationTasks("emergencyContact2", value);
          }
          setEmergencyContact2(value);
        }}
        onBlur={() =>
          runValidationTasks("emergencyContact2", emergencyContact2)
        }
        errorMessage={errors.emergencyContact2?.errorMessage}
        hasError={errors.emergencyContact2?.hasError}
        {...getOverrideProps(overrides, "emergencyContact2")}
      ></TextField>
      <TextField
        label="Emergency contact2 phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={emergencyContact2Phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sub,
              firstName,
              middleName,
              lastName,
              suffix,
              nickName,
              birthDay,
              bsaId,
              active,
              streetAddress,
              city,
              state,
              zipCode,
              homePhone,
              workPhone,
              cellPhone,
              emailAddress,
              mailingList,
              newsletter,
              medFormDate,
              emergencyContact1,
              emergencyContact1Phone,
              emergencyContact2,
              emergencyContact2Phone: value,
            };
            const result = onChange(modelFields);
            value = result?.emergencyContact2Phone ?? value;
          }
          if (errors.emergencyContact2Phone?.hasError) {
            runValidationTasks("emergencyContact2Phone", value);
          }
          setEmergencyContact2Phone(value);
        }}
        onBlur={() =>
          runValidationTasks("emergencyContact2Phone", emergencyContact2Phone)
        }
        errorMessage={errors.emergencyContact2Phone?.errorMessage}
        hasError={errors.emergencyContact2Phone?.hasError}
        {...getOverrideProps(overrides, "emergencyContact2Phone")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
