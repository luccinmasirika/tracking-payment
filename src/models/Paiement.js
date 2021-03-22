const mongoose = require('mongoose');

const paiementSchema = new mongoose.Schema(
  {
    payment: { type: String, trim: true, required: true },
    description: { type: String, trim: true, required: true },
    montant: { type: String, trim: true, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Paiement', paiementSchema);
