import React from "react";
import { useAppDispatch } from "app/hooks";
import { authThunks } from "features/auth/auth.slice";

import s from "features/auth/sign-up/SignUp.module.css"


export const SignUp = () => {
  const dispatch = useAppDispatch();

  const registerHandler = () => {
    const payload = {
      email: "eccoPolo3@gmail.com",
      password: "rotor2222"
    }
    dispatch(authThunks.register(payload));
  };

  return (
    <div className={s.container}>
      <h1>SignUp/Register</h1>
      <button onClick={registerHandler}>Sign-up</button>
    </div>
  );
};
