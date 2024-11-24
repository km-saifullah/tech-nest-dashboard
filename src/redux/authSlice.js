import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: localStorage.getItem("authId")
    ? JSON.parse(localStorage.getItem("authId"))
    : null,
  user: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, { payload }) => {
      state.user = payload;
      localStorage.setItem("auth", JSON.stringify(payload));
    },
    setId: (state, { payload }) => {
      state.id = payload;
      localStorage.setItem("authId", JSON.stringify(payload));
    },
  },
});

export const { setAuth, setId } = authSlice.actions;
export default authSlice.reducer;
