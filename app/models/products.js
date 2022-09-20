const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  path: { type: String },
  name: { type: String },
  price: { type: Number },
  amount: { type: String },
  Product_id: { type: Number },
  quantity: { type: Number },
  ingredient: { type: String },
  hallmark: { type: String },
  nutrition_value: { type: Object },
  catchPhrase: { type: String },
  thumb: { type: Array },
});

const ProductModel = mongoose.model("product", productSchema);
module.exports = ProductModel;
