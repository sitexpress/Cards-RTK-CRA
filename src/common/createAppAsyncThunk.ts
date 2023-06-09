import { AppDispatch, RootState } from "app/store";
import { createAsyncThunk } from "@reduxjs/toolkit";

// const login = createAsyncThunk<{санка возвращает, санка принимает, конфигурация>
export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState
  dispatch:AppDispatch
  rejectValue:string
}>()