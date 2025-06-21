const mongoose = require('mongoose');

const donationProductSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  quantity: { type: Number, required: true },
  amount: { type: Number, required: true }
}, { _id: false });

const donationSchema = new mongoose.Schema({
  donor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [donationProductSchema],
  paymentStatus: { type: String, enum: ['pending', 'successful', 'failed'], default: 'pending' },
  delivery: { type: mongoose.Schema.Types.ObjectId, ref: 'Delivery' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Donation', donationSchema);