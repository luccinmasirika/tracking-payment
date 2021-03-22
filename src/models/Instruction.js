const mongoose = require('mongoose');

const instructionSchema = new mongoose.Schema(
  {
    dta: { type: String, trim: true, required: true },
    montant: { type: Number, trim: true, required: true },
    date: { type: String, trim: true, required: true },
    agent: { type: String, trim: true, required: true },
    libelle: { type: String, trim: true, required: true },
    description: { type: String, trim: true, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Instruction', instructionSchema);
