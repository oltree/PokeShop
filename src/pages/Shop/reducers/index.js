import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getProducts } from "../api";

const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

export const loadProducts = createAsyncThunk(
  "shop/loadProducts",
  async (page, { rejectWithValue }) => {
    try {
      const response = await getProducts(page);

      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const shopSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadProducts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(loadProducts.fulfilled, (state, { payload: products }) => {
      state.isLoading = false;
      state.data = products;
    });
    builder.addCase(loadProducts.rejected, (state, { payload: error }) => {
      state.isLoading = false;
      state.error = error;
    });
  },
});

export default shopSlice.reducer;
