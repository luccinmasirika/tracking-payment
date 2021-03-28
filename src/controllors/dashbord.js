const Fonction = require('../models/Fonction'); // Fonction Schema
const Cartographe = require('../models/Cartographe'); // Fonction Schema
const Paiement = require('../models/Paiement'); // Fonction Schema
const PaiementAutre = require('../models/PaiementAutre'); // Fonction Schema
const Instruction = require('../models/Instruction'); // Fonction Schema

// Show all Fonctions
exports.readAll = async (req, res) => {
  const data1 = await Fonction.countDocuments({});
  const data2 = await Cartographe.countDocuments({});
  const data3 = await Paiement.countDocuments({});
  const data4 = await PaiementAutre.countDocuments({});
  const data5 = await Instruction.countDocuments({});


  res.json({agent: data1 + data2 , pNumber: data3, iNumber:});
};
