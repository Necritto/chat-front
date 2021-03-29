import React from "react";
import { FormikValues } from "formik";

interface CreateFormFieldsPropsInterface {
  formik: FormikValues;
  inputType: string;
  formFieldName: string;
  placeholder?: string;
}

const CreateFormFields = ({
  formik,
  inputType,
  formFieldName,
  placeholder,
}: CreateFormFieldsPropsInterface) => {
  return (
    <>
      <label htmlFor={formFieldName}>{formFieldName}</label>
      <input
        type={inputType}
        id={formFieldName}
        placeholder={placeholder}
        {...formik.getFieldProps(formFieldName)}
      />
      {formik.touched[formFieldName] && formik.errors[formFieldName] ? (
        <span>{formik.errors[formFieldName]}</span>
      ) : null}
    </>
  );
};

export default React.memo(CreateFormFields);
