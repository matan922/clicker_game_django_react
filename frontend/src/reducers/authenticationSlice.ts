import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { AuthState, Login, Register } from "../models/AuthenticationInterface";
import { login, registration } from "../api/authenticationApi";

const initialState: AuthState = {
  username: "",
  isLoading: false,
  isSuccess: false,
  isError: false,
  isLogged: false,
  message: "",
};

// register user

export const registrationAsync = createAsyncThunk(
  "auth/register",
  async (userData: Register, thunkAPI) => {
    try {
      console.log(userData)
      return await registration(userData)
    } catch (error: any) {
      console.log(error.response.data)
      thunkAPI.rejectWithValue(error.response.data)
    }
    
  }
);

export const loginAsync = createAsyncThunk(
  "auth/login",
  async (userData: Login) => {
    return await login(userData)
  }
)

export const authenticationSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
    .addCase(registrationAsync.pending, (state, action) => {
      state.isLoading = true
      state.isError = false
      state.isSuccess = false
    })
    .addCase(registrationAsync.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      // state.username = action.payload.data.username
    })
    .addCase(registrationAsync.rejected, (state, action) =>{
      state.isLoading = false
      state.isError = true
      state.message = ""
    })
    .addCase(loginAsync.fulfilled, (state, action) => {

    })
  },
});

// export const { reset, isLoggedOn, isLoggedOff, resetAccountToFalse, staffLoggedOn } = authenticationSlice.actions;
// export const selectIsLogged = (state: RootState) => state.authentication.isLogged;

export default authenticationSlice.reducer;
