import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: localStorage.getItem("userId")
    ? JSON.parse(localStorage.getItem("userId"))
    : null,
  user: {},
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, { payload }) => {
      state.user = payload;
      localStorage.setItem("user", JSON.stringify(payload));
    },
    setId: (state, { payload }) => {
      state.id = payload;
      localStorage.setItem("userId", JSON.stringify(payload));
    },
  },
});

export const { setAuth, setId } = auth.actions;
export default auth.reducer;
