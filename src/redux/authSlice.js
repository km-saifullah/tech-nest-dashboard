import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, { payload }) => {
      state.user = payload;
      localStorage.setItem("auth", JSON.stringify(payload));
    },
  },
});

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
