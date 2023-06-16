import React from "react";
import s from "./SetNewPassword.module.css";
import { FormComponent } from "features/auth/form/FormComponent";

export const SetNewPassword = () => {
  return <div className={s.container}>
    <FormComponent formType={"set-new-password"} />
  </div>
};

