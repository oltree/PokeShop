import { api } from "../../api/config";

class AuthService {
  static instance = new AuthService();
}

export default AuthService.instance;
