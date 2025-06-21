const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
  state: String,
  pincode: String,
}, { _id: false });

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  phone: String,
  address: addressSchema,
  role: { type: String, enum: ['donor', 'admin'], default: 'donor' },
  donationHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Donation' }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);