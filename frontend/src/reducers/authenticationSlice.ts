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
  message: {
    username: "",
    first_name: "",
    last_name: "",
    password: [],
    password2: [],
    email: ""
  }
};

// register user

export const registrationAsync = createAsyncThunk(
  "auth/register",
  async (userData: Register, thunkAPI) => {
    try {
      console.log(userData)
      return await registration(userData)
    } catch (error: any) {
      console.log(error.response)
      return thunkAPI.rejectWithValue(error.response.data)
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
      state.username = action.payload?.data.username as string
    })
    .addCase(registrationAsync.rejected, (state, action: any) =>{
      state.isLoading = false
      state.isError = true
      // state.message = action.payload
      state.message = action.payload
    })
    .addCase(loginAsync.fulfilled, (state, action) => {

    })
  },
});

// export const {  } = authenticationSlice.actions;
export const selectMessage = (state: RootState) => state.authentication.message;
export const selectIsError = (state: RootState) => state.authentication.isError;
export const selectIsLoading = (state: RootState) => state.authentication.isLoading;
export const selectIsSuccess = (state: RootState) => state.authentication.isSuccess;

export default authenticationSlice.reducer;
