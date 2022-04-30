import axios from "axios";
import { makeAutoObservable } from "mobx";
import { API_URL } from "../http";
import CardService from "../services/card-service";

export default class Store {
  user = {};
  isAuth = false;
  isLoading = false;
  addingCard = {};

  constructor() {
    makeAutoObservable(this);
  }

  async addCard({ cardNumber, expirationDate, cvv, amount }) {
    try {
      const response = await CardService.addCard(
        cardNumber,
        expirationDate,
        cvv,
        amount
      );
      console.log(response, "response");
      this.addingCard = response;
      console.log(
        JSON.stringify(
          this.addingCard.data.card._id,
          this.addingCard.data.card.amount
        )
      );
      return response;
    } catch (error) {
      console.log(error.response?.data?.message);
      console.log(error);
    }
  }
}
