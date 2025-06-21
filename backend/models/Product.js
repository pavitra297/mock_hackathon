const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  itemsIncluded: [String],
  price: { type: Number, required: true },
  imageUrl: String,
  availableStock: Number
});

module.exports = mongoose.model('Product', productSchema);