import axios from "axios";

import { api } from "../../../api/config";

export const getProducts = async (page) => {
  try {
    const response = await api.get(`/products?page=${page}&limit=30`);

    if (axios.isAxiosError(response)) {
      throw response;
    }

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
