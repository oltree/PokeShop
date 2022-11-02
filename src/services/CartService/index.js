import { api } from "../../api/config";

const BASE_URL = "/cart";
const ITEM_BASE_URL = `${BASE_URL}/item`;

class CartService {
  static instance = new CartService();

  getCartInfo() {
    return api.get(BASE_URL);
  }

  addItem(itemToAdd) {
    return api.post(ITEM_BASE_URL, itemToAdd);
  }

  deleteItem(id) {
    return api.delete(`${ITEM_BASE_URL}/${id}`);
  }

  updateItem(payload) {
    return api.patch(ITEM_BASE_URL, payload);
  }
}

export default CartService.instance;
