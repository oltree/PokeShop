import { createSlice } from "@reduxjs/toolkit";

import { createNewOrder, getOrders } from "../thunks";

const initialState = {
  data: null,
  isLoading: false,
  error: null,
  success: false,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    handleUpdateState(state) {
      return { ...state, success: false };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createNewOrder.pending, (state) => {
      state.isLoading = true;
      state.error = null;
      state.success = false;
    });
    builder.addCase(createNewOrder.fulfilled, (state) => {
      state.isLoading = false;
      state.success = true;
    });
    builder.addCase(createNewOrder.rejected, (state, { payload: error }) => {
      state.isLoading = false;
      state.error = error;
      state.success = false;
    });

    builder.addCase(getOrders.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getOrders.fulfilled, (state, { payload: orders }) => {
      state.isLoading = false;
      state.data = orders.reverse();
    });
    builder.addCase(getOrders.rejected, (state, { payload: error }) => {
      state.isLoading = false;
      state.error = error;
    });
  },
});

export const { handleUpdateState } = orderSlice.actions;

export default orderSlice.reducer;
