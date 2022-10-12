import axios from "axios";

import { LOCAL_STORAGE_KEYS } from "../constants";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

api.interceptors.request.use((request) => {
  const accessToken = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);

  if (accessToken) {
    request.headers.Authorization = `Bearer ${accessToken}`;
  }

  return request;
});

export { api };
