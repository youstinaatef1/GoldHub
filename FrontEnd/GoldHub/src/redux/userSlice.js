import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userInfo = action.payload.user;
      state.token = action.payload.token;
    },

    logout: (state) => {
      state.userInfo = null;
      state.token = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;