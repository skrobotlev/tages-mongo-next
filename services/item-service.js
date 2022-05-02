import $api from "../api";

export default class ItemService {
  static async addItem(name, image) {
    return $api.post("/item", { name, image });
  }
}
