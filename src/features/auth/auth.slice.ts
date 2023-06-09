import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArgLoginType, ArgRegisterType, authApi, ProfileType } from "features/auth/auth.api";
import { AppDispatch, RootState } from "app/store";
import { createAppAsyncThunk } from "common/createAppAsyncThunk";

// // Promise version
// const register = createAsyncThunk("auth/register", (arg: ArgRegisterType, thunkAPI) => {
//   // часто используемые функции в createAsyncThunk:
//   // const  {dispatch, getState, rejectWithValue} = thunkAPI
//   authApi.register(arg).then((res) => {
//     console.log("sign-up/register:", res.data.addedUser);
//   });
// });

// // Promise version
// const login = createAsyncThunk("auth/login", (arg: ArgLoginType, thunkAPI) => {
//   // const {dispatch} = thunkAPI
//   return authApi.login(arg).then((res) => {
//     // debugger
//     // dispatch(authActions.setProfile({profile:res.data}))
//     return {profile:res.data}
//
//   });
// });

const slice = createSlice({
  name: "auth",
  initialState: {
    profile: null as ProfileType | null
  },
  reducers: {
    // setProfile: (state, action:PayloadAction<{profile:ProfileType}>) => {
    //   state.profile = action.payload.profile
    // }
  },
  extraReducers: builder => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.profile = action.payload.profile;
      })
      .addCase(register.rejected, (state, action) => {
        debugger
      });
  }
});

// Async version
const register = createAppAsyncThunk<void, ArgRegisterType>
("auth/register", async (arg) => {
  await authApi.register(arg);
});

// Async version
// const login = createAsyncThunk<{санка возвращает, санка принимает, конфигурация>
const login = createAppAsyncThunk<{ profile: ProfileType }, ArgLoginType>
("auth/login", async (arg, thunkAPI) => {
  const res = await authApi.login(arg);
  return { profile: res.data };
});

export const authReducer = slice.reducer;
export const authActions = slice.actions;
export const authThunks = { register, login };