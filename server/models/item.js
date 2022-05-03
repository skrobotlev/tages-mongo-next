const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  code: {
    type: String,
  },
  price: {
    type: Object,
    content: {
      oldPrice: Number,
      currentPrice: Number,
    },
  },
  material: {
    type: Object,
    content: {
      id: Number,
      name: String,
    },
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.models.Item || mongoose.model("Item", ItemSchema);
