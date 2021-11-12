const mongoose = require("mongoose");

const productModel = mongoose.Schema({
  name: {
    type: String,
    required: [true, "product name must be provided"],
  },
  price: {
    type: Number,
    required: [true, "price name must be provided"],
  },
  // insted of feature use ` keyboardlight `
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 3.4,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ["hp", "dell", "acer", "redmi", "samsung"],
      message: "{VALUE} is not supported",
    },
  },
});

module.exports = mongoose.model("ProductModel", productModel);
