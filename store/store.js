import axios from "axios";
import { makeAutoObservable } from "mobx";
import ItemService from "../services/item-service";

export default class Store {
  user = {};
  isAuth = false;
  isLoading = false;
  addingCard = {};

  constructor() {
    makeAutoObservable(this);
  }

  async addItem({ name, image }) {
    try {
      const response = await ItemService.addItem(name, image);
      console.log(response, "response");

      return response;
    } catch (error) {
      console.log(error.response?.data?.message);
      console.log(error);
    }
  }

  // async addCard({ cardNumber, expirationDate, cvv, amount }) {
  //   try {
  //     const response = await CardService.addCard(
  //       cardNumber,
  //       expirationDate,
  //       cvv,
  //       amount
  //     );
  //     console.log(response, "response");
  //     this.addingCard = response;
  //     console.log(
  //       JSON.stringify(
  //         this.addingCard.data.card._id,
  //         this.addingCard.data.card.amount
  //       )
  //     );
  //     return response;
  //   } catch (error) {
  //     console.log(error.response?.data?.message);
  //     console.log(error);
  //   }
  // }
}
