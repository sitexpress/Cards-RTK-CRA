import { useAppDispatch, useAppSelector } from "app/hooks";
import { useEffect } from "react";
import { appActions } from "app/app.slice";
import { useNavigate } from "react-router-dom";
import { CircularIndeterminate } from "app/progressBar/progressBar";

import s from "./App.module.css"

function App() {
  const isLoading = useAppSelector((state) => state.app.isLoading);
  const isAppInitialized = useAppSelector((state) => state.app.isAppInitialized);
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      dispatch(appActions.setIsLoading({ isLoading: false }))
    }, 3000)
  }, [])


  if(!isAppInitialized) {navigate("/sign-in")}
  return (
    <div className={s.App}>
      {isLoading && <CircularIndeterminate/>}
    </div>
  );
}

export default App;