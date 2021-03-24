const mongoose = require('mongoose');

const instructionSchema = new mongoose.Schema(
  {
    date: { type: String, trim: true, required: true },
    montant: { type: Number, trim: true, required: true },
    agent: { type: String, trim: true, required: true },
    libelle: { type: String, trim: true, required: true },
    description: { type: String, trim: true, default: '' },
    date2: { type: String, trim: true, default: '' },
    payment: { type: String, trim: true, default: 'Non' },
    refference: { type: String, trim: true, default: '' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Instruction', instructionSchema);
