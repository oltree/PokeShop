import { api } from "../../../api/config";

export const signUp = (userData) => api.post("/auth/signup", userData);
