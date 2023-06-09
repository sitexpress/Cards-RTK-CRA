import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Cards } from "features/packs/cards";
import { Error } from "features/packs/404";
import { CheckEmail } from "features/packs/check-email";
import { ForgotPassword } from "features/packs/forgot-password";
import { Learn } from "features/packs/learn";
import { Packs } from "features/packs/packs";
import { SetNewPassword } from "features/packs/set-new-password";
import { Profile } from "features/packs/profile";
import { SignIn } from "features/auth/sign-in/SignIn";
import App from "app/App";
import { SignUp } from "features/auth/sign-up/SignUp";

const container = document.getElementById("root")!;
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/cards",
    element: <Cards />,
  },
  {
    path: "/check-email",
    element: <CheckEmail />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/learn",
    element: <Learn />,
  },
  {
    path: "/packs",
    element: <Packs />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/set-new-password",
    element: <SetNewPassword />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);

// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
