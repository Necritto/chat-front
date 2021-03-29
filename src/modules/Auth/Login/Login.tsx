import React from "react";
import { useFormik } from "formik";
import { observer } from "mobx-react-lite";
import * as Yup from "yup";

import { createFormikInitialObject } from "utils/helpers/createFormikInitialObject";
import { email, password } from "utils/helpers/yupValidationFields";
import CreateFormFields from "components/CreateFormFields/CreateFormFields";
import authManager from "services/AuthManager";

import { AuthContentContainer, AuthContentFormik } from "../styles";

const Login = () => {
  const yupLogin = () => {
    return Yup.object({
      email,
      password,
    });
  };

  const formik = useFormik({
    initialValues: createFormikInitialObject("email", "password"),
    validationSchema: yupLogin(),
    onSubmit: async ({ email, password }) => {
      await authManager.login(email, password);
    },
  });

  return (
    <AuthContentContainer>
      <header>
        <h2>Login</h2>
        <p>Enter your data below</p>
      </header>
      <AuthContentFormik>
        <form onSubmit={formik.handleSubmit}>
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
          <button type="submit">Login</button>
        </form>
      </AuthContentFormik>
    </AuthContentContainer>
  );
};

export default observer(Login);
