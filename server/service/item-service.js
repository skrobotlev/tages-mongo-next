const ApiError = require("../exceptions/api-error");
const ItemModel = require("../models/item");

class ItemService {
  async addItem(name, image) {
    const newItem = await ItemModel.findOne({ desc });
    if (newItem) {
      throw ApiError.BadRequest(`Товар с таким номером ${desc} уже существует`);
    }
    const item = await ItemModel.create({
      name,
      image,
    });

    return { item };
  }

  async getAllItems() {
    const items = await ItemModel.find();
    return items;
  }
}

module.exports = new ItemService();
