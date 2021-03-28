const Fonction = require('../models/Fonction'); // Fonction Schema
const Cartographe = require('../models/Cartographe'); // Fonction Schema
const Paiement = require('../models/Paiement'); // Fonction Schema
const PaiementAutre = require('../models/PaiementAutre'); // Fonction Schema
const Instruction = require('../models/Instruction'); // Fonction Schema

// Show all Fonctions
exports.readAll = async (req, res) => {
  const data = await Fonction.find({}).count();
  if (!data) {
    return res.status(400).json({ error: 'Something went wrong' });
  }
  res.json(data);
};
