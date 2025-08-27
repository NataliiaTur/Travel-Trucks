import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const camperSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setLoading } = camperSlice.actions;
export default camperSlice.reducer;
