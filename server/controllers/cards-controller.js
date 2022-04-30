const cardService = require("../service/card-service");
const { validationResult } = require("express-validator");
const ApiError = require("../exceptions/api-error");

class CardController {
  async addCard(req, res, next) {
    try {
      const { cardNumber, expirationDate, cvv, amount } = req.body;
      console.log(cardNumber, expirationDate, cvv, amount, "epass");
      const cardData = await cardService.addCard(
        cardNumber,
        expirationDate,
        cvv,
        amount
      );

      return res.json(cardData);
    } catch (error) {
      next(error);
    }
  }

  async getCards(req, res, next) {
    try {
      const cards = await cardService.getAllCards();
      return res.json(cards);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CardController();
