const express = require('express');
const ProductSchema = require('../models/product');
const router = express.Router();

//Create
router.post('/api/product', async (req, res) => {
  console.log(req.body)
  const product = new ProductSchema({ ...req.body });
  await product.save()
    .then(response => res.json(response))
    .catch(error => res.status(500).json(error))
})

// Read all products
router.get('/api/products', async (req, res) => {
  try {
    const products = await ProductSchema.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Get Single
router.get('/api/product/:id', async (req, res) => {
  const findproduct = await ProductSchema.findById(req.params.id);
  res.json(findproduct)
})

// Update
router.patch('/api/product/:id', async (req, res) => {
  const { id } = req.params;
  
  try {
    const updatedProduct = await ProductSchema.findByIdAndUpdate(
      id,
      { $set: req.body }, // Use $set to update only specific fields
      { new: true }
    );

    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Delete
router.delete('/api/product/:id', async (req, res) => {
  const { id } = req.params.id
  await ProductSchema.findByIdAndDelete(req.params.id)
    .then(response => res.json(response))
    .catch(error => res.status(500).json(error))
})

module.exports = router