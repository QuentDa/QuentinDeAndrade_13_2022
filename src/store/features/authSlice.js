import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    username: '',
    user: {
      firstName: '',
      lastName: '',
    },
    token: '',
    error: '',
    isLoading: false,
  },
  reducers: {
    updateUsername: (state, action) => {
      state.username = action.payload;
    },
    updateUser: (state, action) => {
      state.user.firstName = action.payload;
      state.user.lastName = action.payload;
    },
    setToken: (state, action) => { 
      state.token = action.payload;
      localStorage.setItem('token', action.payload)
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
  updateUser,
  setToken,
  authRequest,
  authSuccess,
  authError,
} = authSlice.actions;

export default authSlice.reducer;