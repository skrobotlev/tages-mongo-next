// const uuid = require("uuid");
const ApiError = require("../exceptions/api-error");
const CardModel = require("../models/card");

class CardService {
  async addCard(cardNumber, expirationDate, cvv, amount) {
    const newCard = await CardModel.findOne({ cardNumber });
    if (newCard) {
      throw ApiError.BadRequest(
        `Карта с таким номером ${cardNumber} уже существует`
      );
    }
    const card = await CardModel.create({
      cardNumber,
      expirationDate,
      cvv,
      amount,
    });

    return { card };
  }

  async getAllCards() {
    const cards = await CardModel.find();
    return cards;
  }
}

module.exports = new CardService();
