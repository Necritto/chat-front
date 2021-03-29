import React from "react";
import { Link, useHistory } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useFormik } from "formik";
import * as Yup from "yup";

import { createFormikInitialObject } from "utils/helpers/createFormikInitialObject";
import { password } from "utils/helpers/yupValidationFields";
import CreateFormFields from "components/CreateFormFields/CreateFormFields";
import authManager from "services/AuthManager";

import { ChangeContainer } from "./styles";
import { AuthContentFormik } from "../Auth/styles";

const Change = () => {
  const history = useHistory();

  const yupChange = () => {
    return Yup.object({
      oldPassword: password,
      newPassword: password,
    });
  };

  const formik = useFormik({
    initialValues: createFormikInitialObject("oldPassword", "newPassword"),
    validationSchema: yupChange(),
    onSubmit: async ({ oldPassword, newPassword }) => {
      await authManager.changePassword(oldPassword, newPassword);
      history.replace("/");
    },
  });

  return (
    <ChangeContainer>
      <h2>Change your password</h2>
      <AuthContentFormik>
        <form onSubmit={formik.handleSubmit}>
          <CreateFormFields
            formik={formik}
            inputType={"password"}
            formFieldName="oldPassword"
            placeholder="old password"
          />
          <CreateFormFields
            formik={formik}
            inputType={"password"}
            formFieldName={"newPassword"}
            placeholder={"new password"}
          />
          <button type="submit">Change</button>
        </form>
      </AuthContentFormik>
      <Link to="/">&#11176; Back</Link>
    </ChangeContainer>
  );
};

export default observer(Change);
