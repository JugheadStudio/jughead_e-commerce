const mongoose = require('mongoose')


// const ProductSchema = mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     price: {
//         type: Number,
//         required: true
//     },
//     stock: {
//         type: Number,
//         required: true
//     },
//     category: {
//         type: String,
//         required: true
//     },
// })

const ProductSchema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  productCollection: { type: String, required: true },
  material: { type: String, required: true },
  style: { type: String, required: true },
  stock: {
    s: { type: Number, required: true },
    md: { type: Number, required: true },
    lg: { type: Number, required: true },
    xl: { type: Number, required: true },
    xxl: { type: Number, required: true },
    xxxl: { type: Number, required: true }
  }
});

module.exports = mongoose.model("Product", ProductSchema)