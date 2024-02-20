const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    rollno: {
      type: Number,
      required: true,
    },

    className: {
      type: String,
      required: true,
    },

    department: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
