import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { AuthState, Register } from "../models/AuthenticationInterface";
import { registeration } from "../api/authenticationApi";

const initialState: AuthState = {
  username: "",
  isLoading: false,
  isSuccess: false,
  message: "",
};

// register user

export const registerationAsync = createAsyncThunk(
  "auth/register",
  async (userData: FormData) => {
    console.log(userData)
    return await registeration(userData);
  }
);

export const authenticationSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
    .addCase(registerationAsync.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.username = action.payload.data.username
    });
  },
});

// export const { reset, isLoggedOn, isLoggedOff, resetAccountToFalse, staffLoggedOn } = authenticationSlice.actions;
// export const selectIsLogged = (state: RootState) => state.authentication.isLogged;

export default authenticationSlice.reducer;
