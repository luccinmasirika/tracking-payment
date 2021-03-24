const mongoose = require('mongoose');

const formSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, required: true },
    fond: { type: String, trim: true, required: true },
    payment: { type: String, trim: true, required: true },
    bank: { type: String, trim: true, default: '' },
    montant: { type: Number, trim: true },
    date: { type: String, trim: true, default: '' },
    comment: { type: String, trim: true, default: '' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Form', formSchema);
