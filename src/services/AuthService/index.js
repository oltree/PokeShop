import axios from "axios";

import { api } from "../../api/config";

const BASE_URL = "/auth";

class AuthService {
  static instance = new AuthService();

  async signIn(userData) {
    try {
      const response = await api.post(`${BASE_URL}/signIn`, userData);

      if (axios.isAxiosError(response)) {
        throw response;
      }

      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

  signUp(userData) {
    return api.post(`${BASE_URL}/signup`, userData);
  }
}

export default AuthService.instance;
