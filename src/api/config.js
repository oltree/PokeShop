import axios from "axios";

import { LOCAL_STORAGE_KEYS } from "../constants";

const api = axios.create({
  baseURL: "https://poke-store-api.herokuapp.com",
});

api.interceptors.request.use((request) => {
  const accessToken = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);

  if (accessToken) {
    request.headers.Authorization = `Bearer ${accessToken}`;
  }

  return request;
});

export { api };
