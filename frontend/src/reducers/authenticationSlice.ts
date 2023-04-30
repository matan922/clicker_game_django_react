import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import {
  AuthState,
  LoginRequest,
  RegisterRequest,
  Error,
} from "../models/AuthenticationInterface";
import { login, registration } from "../api/authenticationApi";

const initialState: AuthState = {
  username: "",
  isLoading: false,
  isSuccess: false,
  isError: false,
  isLogged: false,
  access: "",
  refresh: "",
  message: {},
};

// register user

export const registrationAsync = createAsyncThunk(
  "auth/register",
  async (userData: RegisterRequest, thunkAPI) => {
    try {
      return await registration(userData);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const loginAsync = createAsyncThunk(
  "auth/login",
  async (userData: LoginRequest, thunkAPI) => {
    try {
      return await login(userData);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const authenticationSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registrationAsync.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(registrationAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.username = action.payload?.data.username;
      })
      .addCase(registrationAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as Error;
      })

      .addCase(loginAsync.pending, (state, action) => {
        state.isSuccess = false;
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.access = action.payload.data.access;
        state.refresh = action.payload.data.refresh;
        localStorage.setItem("access", JSON.stringify(state.access))
        localStorage.setItem("refresh", JSON.stringify(state.refresh))
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
      });
  },
});

// export const {  } = authenticationSlice.actions;
export const selectMessage = (state: RootState) => state.authentication.message;
export const selectIsError = (state: RootState) => state.authentication.isError;
export const selectIsLoading = (state: RootState) => state.authentication.isLoading;
export const selectIsSuccess = (state: RootState) => state.authentication.isSuccess;

export default authenticationSlice.reducer;
