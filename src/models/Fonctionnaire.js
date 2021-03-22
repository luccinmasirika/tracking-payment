const mongoose = require('mongoose');

const fonctionnaireSchema = new mongoose.Schema(
  {
    firstName: { type: String, trim: true, required: true },
    lastName: { type: String, trim: true, required: true },
    fonction: { type: String, trim: true, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Fonctionnaire', fonctionnaireSchema);
