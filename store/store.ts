import { makeAutoObservable, runInAction, toJS } from "mobx";
import { getItems } from "../api/functions";

export default class Store {
  addingCard = {};
  _items: any;

  constructor() {
    makeAutoObservable(this);
    this._items = [];
  }

  get items() {
    return toJS(this._items);
  }

  set items(data) {
    this._items = data;
  }

  async requestItems() {
    const res = await getItems();
    runInAction(() => {
      this._items = res;
    });
  }
}
