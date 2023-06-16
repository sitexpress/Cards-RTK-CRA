import React from "react";
import { FieldValues, useForm } from "react-hook-form";

import s from "./FromComponent.module.css";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { useAppDispatch } from "app/hooks";
import { authThunks } from "features/auth/auth.slice";
import { ArgRegisterType } from "features/auth/auth.api";
import { Link } from "react-router-dom";

import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FilledInput from '@mui/material/FilledInput';
import Input from '@mui/material/Input';

type FormComponentType = {
  formType: 'sign-in' | 'sign-up' | 'set-new-password'
}
export const FormComponent:React.FC<FormComponentType> = ({formType}) => {
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  //TODO styles uppercase in btn
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show)

  const {
    register,
    formState: {
      errors
    },
    handleSubmit

  } = useForm<ArgRegisterType>();

  // TODO
  const onSubmit = (data:ArgRegisterType) => {

    alert(JSON.stringify(data))
    dispatch(authThunks.register(data));
  }

  return (
      formType === 'sign-up'
        ?
          <Paper>
            <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
              <div className={s.container_fields}>
              <h1 className={s.heading}>Sign up</h1>
              <FormControl sx={{ width: "347px", marginTop: "14px" }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
                <Input
                  {...register('email')}
                  id="email"
                />
              </FormControl>
              <FormControl sx={{ width: "347px", marginTop: "23px" }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                <Input
                  {...register('password')}
                  id="standard-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        sx={{color:"#000000"}}
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>

              <FormControl  sx={{ width: "347px", marginTop: "23px" }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">Confirm password</InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={showConfirmPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        sx={{color:"#000000"}}
                        aria-label="toggle password visibility"
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>

              <Button
                sx={{
                  marginTop: "60px",
                  width: "347px",
                  height: "36px",
                  borderRadius: "30px",
                  textTransform: "none",
                  background: "#366EFF",
                  boxShadow: '0px 4px 18px rgba(54, 110, 255, 0.35), inset 0px 1px 0px rgba(255, 255, 255, 0.3)',
              }}
                type="submit"
                variant="contained"
              >Sign Up</Button>
              <div className={s.account_link_wrapper}>
                <p>Already have an account?</p>
              </div>
                <FormControl>
                  <Link className={s.signup_link} to="/sign-in">Sign In</Link>
                </FormControl>
              </div>
            </form>
          </Paper>
        : formType === 'sign-in' ?
          <Paper>
            <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
              <div className={s.container_fields}>
                <h1 className={s.heading}>Sign in</h1>
                <FormControl sx={{ width: "347px", marginTop: "24px" }} variant="standard">
                  <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
                  <Input
                    {...register('email')}
                    id="email"
                  />
                </FormControl>
                <FormControl sx={{ width: "347px", marginTop: "24px" }} variant="standard">
                  <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                  <Input
                    {...register('password')}
                    id="standard-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          sx={{color:"#000000"}}
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <div className={s.checkbox_wrapper}>
                  <FormControlLabel sx={{ marginLeft: "20px", paddingTop: "12px"  }} control={<Checkbox defaultChecked />} label="Remembr me" />
                </div>
                <div className={s.password_recovery_wrapper}>
                  <FormControl sx={{marginRight: "33px", marginTop: "12px",  color: "red"}}>
                    <Link className={s.password_recovery} to="/set-new-password">Forgot password?</Link>
                  </FormControl>
                </div>
                <Button
                  sx={{
                    marginTop: "69px",
                    width: "347px",
                    height: "36px",
                    borderRadius: "30px",
                    textTransform: "none",
                    background: "#366EFF",
                    boxShadow: '0px 4px 18px rgba(54, 110, 255, 0.35), inset 0px 1px 0px rgba(255, 255, 255, 0.3)',
                  }}
                  type="submit"
                  variant="contained">Sign In</Button>
                <div className={s.account_link_wrapper}>
                  <p>Don't have an account?</p>
                </div>
                <FormControl>
                  <Link className={s.signup_link} to="/sign-up">Sign Up</Link>
                </FormControl>
              </div>
            </form>
          </Paper>
        :
          <Paper>
            <form className={s.form_set_new_password_instructions} onSubmit={handleSubmit(onSubmit)}>
              <div className={s.container_fields}>
                <h1 className={s.heading}>Forgot your password?</h1>
                <FormControl sx={{ width: "347px", marginTop: "24px" }} variant="standard">
                  <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
                  <Input
                    {...register('email')}
                    id="email"
                  />
                </FormControl>

                <div className={s.set_new_password_instructions}>
                  <p>Enter your email address and we will send you further instructions </p>
                </div>

                <Button
                  sx={{
                    marginTop: "45px",
                    width: "347px",
                    height: "36px",
                    borderRadius: "30px",
                    textTransform: "none",
                    background: "#366EFF",
                    boxShadow: '0px 4px 18px rgba(54, 110, 255, 0.35), inset 0px 1px 0px rgba(255, 255, 255, 0.3)',
                  }}
                  type="submit"
                  variant="contained">Sign In</Button>
                <div className={s.account_link_wrapper}>
                  <p>Did you remember your password?</p>
                </div>
                <FormControl>
                  <Link className={s.try_login_link} to="/sign-in">Try logging in</Link>
                </FormControl>
              </div>
            </form>
          </Paper>
    )
};

