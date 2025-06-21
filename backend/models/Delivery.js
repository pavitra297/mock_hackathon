const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
  donation: { type: mongoose.Schema.Types.ObjectId, ref: 'Donation' },
  status: { type: String, enum: ['pending', 'in_transit', 'delivered'], default: 'pending' },
  trackingId: String,
  expectedDeliveryDate: Date,
  actualDeliveryDate: Date,
  lastUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Delivery', deliverySchema);