const Form = require('../models/Form'); // Fonction Schema
const Fonction = require('../models/Fonction'); // Fonction Schema
const Cartographe = require('../models/Cartographe'); // Fonction Schema
const Paiement = require('../models/Paiement'); // Fonction Schema
const PaiementAutre = require('../models/PaiementAutre'); // Fonction Schema
const Instruction = require('../models/Instruction'); // Fonction Schema
const moment = require('moment')


// Show all Fonctions
exports.readAll = async (req, res) => {
  const data0 = await Form.countDocuments({});
  const data1 = await Fonction.countDocuments({});
  const data2 = await Cartographe.countDocuments({});
  const semaine1 = await Cartographe.find({
    createdAt: {
      $gte: new Date(),
      $lt: new Date(2021, 3, 27),
    },
  });
  const data3 = await Paiement.find({});
  const data4 = await PaiementAutre.find({});
  const data5 = await Instruction.countDocuments({});

  const pMontants = data3.map((n) => n.montant);
  const paMontants = data4.map((n) => n.montant);
  const montants = [...pMontants, ...paMontants];

  res.json({
    form: data0,
    agent: data1 + data2,
    pNumber: eval(montants.join('+')),
    iNumber: data5,
    test: semaine1,
  });
};
