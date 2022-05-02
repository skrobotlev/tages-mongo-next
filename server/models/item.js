const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  code: {
    type: String,
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.models.Item || mongoose.model("Item", ItemSchema);
