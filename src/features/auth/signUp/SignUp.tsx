import React from "react";
import { FormComponent } from "features/auth/form/FormComponent";

import s from "./SignUp.module.css";

export const SignUp = () => {
  return <div className={s.container}>
    <FormComponent formType={"sign-up"} />
  </div>;
};
