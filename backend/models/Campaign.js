const mongoose = require('mongoose');

const campaignProductSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  quantity: Number
}, { _id: false });

const campaignSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  startDate: Date,
  endDate: Date,
  targetAmount: Number,
  raisedAmount: Number,
  targetRegion: String,
  productsNeeded: [campaignProductSchema],
  isActive: Boolean,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Campaign', campaignSchema);