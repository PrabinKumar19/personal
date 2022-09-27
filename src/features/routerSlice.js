import { createSlice } from "@reduxjs/toolkit";

export const routerSlice = createSlice({
  name: "router",
  initialState: {
    name: "/",
  },
  reducers: {
    setRoute: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setRoute } = routerSlice.actions;

export const selectRouteName = (state) => state.router.name;

export default routerSlice.reducer;
