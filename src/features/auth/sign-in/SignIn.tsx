import React from "react";
import { authThunks } from "features/auth/auth.slice";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "app/hooks";

export const SignIn = () => {
  const dispatch = useAppDispatch()
  const loginHandler = () => {
    const payload = {
      email: "eccoPolo3@gmail.com",
      password: "rotor2222",
      rememberMe: false
    }
    dispatch(authThunks.login(payload))
  }


  return <div>
    <h1>SignInOrLogin</h1>
    <button onClick={loginHandler}>Login</button>
  </div>
};
