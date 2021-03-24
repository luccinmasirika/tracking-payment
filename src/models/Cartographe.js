const mongoose = require('mongoose');

const cartographeSchema = new mongoose.Schema(
  {
    firstName: { type: String, trim: true, required: true },
    lastName: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true },
    airtel: { type: String, trim: true, default: '' },
    airtelMoney: { type: String, default: 'No' },
    vodacom: { type: String, trim: true, default: '' },
    mPesa: { type: String, default: 'No' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Cartographe', cartographeSchema);
