const mongoose = require('mongoose');

const fonctionSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Fonction', fonctionSchema);
