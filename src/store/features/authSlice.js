import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    username: '',
    password: '',
    token: '',
    error: '',
    isLoading: false,
  },
  reducers: {
    updateUsername: (state, action) => {
      state.username = action.payload;
    },
    updatePassword: (state, action) => {
      state.password = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    authRequest: (state) => {
      state.error = '';
      state.isLoading = true;
    },
    authSuccess: (state) => {
      state.error = '';
      state.isLoading = false;
    },
    authError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  updateUsername,
  updatePassword,
  setToken,
  authRequest,
  authSuccess,
  authError,
} = authSlice.actions;

export default authSlice.reducer;
