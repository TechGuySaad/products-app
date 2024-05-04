const mongoose = require("mongoose");

//SCHEMA
const productSchema = new mongoose.Schema(
  {
    product: {
      type: String,
    },
    productDescription: {
      type: Boolean,
    },
    price: {
      type: Number,
    },
  },
  { timestamps: true }
);

//MODEL
const Product = mongoose.model("product", productSchema);

module.exports = Product;
