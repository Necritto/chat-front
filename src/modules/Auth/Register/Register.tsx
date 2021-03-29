import React from "react";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";

import { createFormikInitialObject } from "utils/helpers/createFormikInitialObject";
import { email, password } from "utils/helpers/yupValidationFields";
import CreateFormFields from "components/CreateFormFields/CreateFormFields";
import authManager from "services/AuthManager";

import { AuthContentContainer, AuthContentFormik } from "../styles";

const Register = () => {
  const history = useHistory();

  const yupRegister = () => {
    return Yup.object({
      email,
      password,
      name: Yup.string().trim().required("Required"),
    });
  };

  const formik = useFormik({
    initialValues: createFormikInitialObject("email", "password", "name"),
    validationSchema: yupRegister(),
    onSubmit: async ({ email, password, name }) => {
      await authManager.register(email, password, name);
      history.replace("/auth/login");
    },
  });

  return (
    <AuthContentContainer>
      <header>
        <h2>Register</h2>
        <p>Enter your data below</p>
      </header>
      <AuthContentFormik>
        <form onSubmit={formik.handleSubmit}>
          <CreateFormFields formik={formik} inputType={"text"} formFieldName={"name"} placeholder={"your name"} />
          <CreateFormFields
            formik={formik}
            inputType={"email"}
            formFieldName={"email"}
            placeholder={"exp@example.com"}
          />
          <CreateFormFields
            formik={formik}
            inputType={"password"}
            formFieldName={"password"}
            placeholder={"password"}
          />
          <button type="submit">Register</button>
        </form>
      </AuthContentFormik>
    </AuthContentContainer>
  );
};

export default React.memo(Register);
