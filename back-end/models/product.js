const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Debe ingresar el campo nombre"],
    },
    price: {
      type: Number,
      required: [true, "Debe ingresar el campo precio"],
    },
    images: {
      type: Object,
      required: false,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Categories",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Products", ProductSchema);
