import axios from "axios";

import { api } from "../../../api/config";

export const getProductsDetails = async (id) => {
  try {
    const response = await api.get(`/products/${id}`);

    if (axios.isAxiosError(response)) {
      throw response;
    }

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
