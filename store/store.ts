import axios from "axios";
import { computed, makeAutoObservable, makeObservable, observable } from "mobx";
import { getItems } from "../api";
import ItemService from "../services/item-service";

export default class Store {
  addingCard = {};
  private _items: any[];

  constructor() {
    makeAutoObservable(this);
    // makeObservable(this);
    this._items = [];
  }
  get items() {
    return this._items;
  }

  set items(data) {
    this._items = data;
  }

  async requestItems() {
    const res = await getItems();
    console.log(res.data);
    // this.items = res;
  }
}
