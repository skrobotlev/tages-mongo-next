import $api from "../api";

export default class CardService {
  static async addCard(cardNumber, expirationDate, cvv, amount) {
    return $api.post("/card", { cardNumber, expirationDate, cvv, amount });
  }
}
