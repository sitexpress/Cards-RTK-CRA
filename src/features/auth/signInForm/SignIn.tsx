import React from "react";
import { FormComponent } from "features/auth/form/FormComponent";
import s from "./SignIn.module.css";

export const SignIn = () => {
  return <div className={s.container}>
    <FormComponent formType={"sign-in"} />
  </div>;
};
