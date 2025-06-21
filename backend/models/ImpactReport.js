const mongoose = require('mongoose');

const impactReportSchema = new mongoose.Schema({
  donation: { type: mongoose.Schema.Types.ObjectId, ref: 'Donation' },
  beneficiariesCount: Number,
  region: String,
  feedback: String,
  images: [String],
  published: Boolean,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ImpactReport', impactReportSchema);