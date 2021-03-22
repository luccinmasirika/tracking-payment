const mongoose = require('mongoose');

const cartographeSchema = new mongoose.Schema(
  {
    payment: { type: String, trim: true, required: true },
    montant: { type: Number, trim: true, required: true },
    refference: { type: String, trim: true, required: true },
    libelle: { type: String, trim: true, required: true },
    agent: { type: String, trim: true, required: true },
    province: { type: String, trim: true, required: true },
    date: { type: String, trim: true, required: true },
    description: { type: String, trim: true, required: true }

  },
  { timestamps: true }
);

module.exports = mongoose.model('Category', cartographeSchema);
