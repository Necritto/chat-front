import * as Yup from "yup";

export const email = Yup.string()
  .email("Invalid email address")
  .required("Required");
export const password = Yup.string()
  .trim()
  .min(8, "Password should be 8 chars minimum.")
  .required("Required");
