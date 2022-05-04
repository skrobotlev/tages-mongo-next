import { makeAutoObservable, runInAction, toJS } from "mobx";
import { getItems } from "../api/functions";
import { sortBy } from "../utils/sort-function";

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

  sortedItems(prop: string, desc: boolean) {
    const newItems = sortBy(toJS(this.items), { prop, desc });
    this.items = newItems;
    console.log(newItems);
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
