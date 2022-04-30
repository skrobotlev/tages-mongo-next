const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
  cardNumber: {
    type: String,
    required: [true, "Please add a card number"],
    unique: true,
    // index: true,
    // indexedDB,
    maxlength: [40, "Card number cannot be more than 40 characters"],
  },
  expirationDate: {
    type: String,
    required: true,
    maxlength: [200, "Expiration date cannot be more than 200 characters"],
  },
  cvv: {
    type: String,
    required: true,
    maxlength: [3, "CVV cannot be more than 3 characters"],
  },
  amount: {
    type: String,
    required: true,
    maxlength: [10, "Amount cannot be more than 10 characters"],
  },
});

module.exports = mongoose.models.Card || mongoose.model("Card", CardSchema);
