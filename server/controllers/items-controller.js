const itemService = require("../service/item-service");
const Item = require("../models/item.js");
class ItemController {
  async getItems(req, res) {
    // console.log("get items");
    try {
      const item = await Item.find();
      res.status(200).json(item);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async createItem(req, res) {
    const item = new Item(req.body);
    try {
      await item.save();
      res.status(201).json(item);
    } catch (error) {}
  }

  async addItem(req, res, next) {
    try {
      const { name, image } = req.body;
      const itemData = await itemService.addCard(name, desc, image);

      return res.json(itemData);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ItemController();
