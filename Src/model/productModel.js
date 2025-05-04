const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String },
    brand: { type: String, required: true },
    categories: {
      type: String,
      required: true,
    },

    images: [
      {
        type: String,
        required: true,
      },
    ],
    price: { type: Number, required: true, min: 0 },
    discount: { type: Number, min: 0, max: 100 },
    stock: { type: Number, required: true, min: 0 },
    barcodeNo: { type: Number, required: true, unique: true },
    quantity: { type: Number, min: 1 },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const productModel = mongoose.model("product", ProductSchema);

module.exports = productModel;
