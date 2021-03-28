const Form = require('../models/Form'); // Fonction Schema
const Fonctionnaire = require('../models/Fonctionnaire'); // Fonction Schema
const Cartographe = require('../models/Cartographe'); // Fonction Schema
const Paiement = require('../models/Paiement'); // Fonction Schema
const PaiementAutre = require('../models/PaiementAutre'); // Fonction Schema
const Instruction = require('../models/Instruction'); // Fonction Schema
const moment = require('moment');

// Show all Fonctions
exports.readAll = async (req, res) => {
  const filter = [
    {
      $match: {
        createdAt: {
          $gte: moment().startOf('isoweek').toDate(),
          $lt: moment().endOf('isoweek').toDate(),
        },
      },
    },
  ];

  const form = await Form.find({});
  const formF = await Form.aggregate(filter);

  const agent1 = await Fonctionnaire.find({});
  const agentF1 = await Fonctionnaire.aggregate(filter);

  const agent2 = await Cartographe.find({});
  const agentF2 = await Cartographe.aggregate(filter);

  const pay1 = await Paiement.find({});
  const payF1 = await Paiement.aggregate(filter);

  const pay2 = await PaiementAutre.find({});
  const payF2 = await PaiementAutre.aggregate(filter);

  const inst = await Instruction.find({});
  const instF = await Instruction.aggregate(filter);

  const oui = await Form.find({ payment: 'Oui' });
  const non = await Form.find({ payment: 'Non' });

  const add = (a, b) => {
    const x = a.map((n) => n.montant);
    const y = b.map((n) => n.montant);
    // return [...x, ...y];
    return eval([...x, ...y].join('+'));
  };

  const add2 = (a, b) => {
    return a.length + b.length;
  };

  console.log((add2(agentF1, agentF2) / add2(agent1, agent2)) * 100);
  res.json({
    form: form.length,
    formF: (formF.length / form.length) * 100,
    agent: add2(agent1, agent2),
    agentF: (add2(agentF1, agentF2) / add2(agent1, agent2)) * 100,
    pay: add(pay1, pay2),
    payF: (add(payF1, payF2) / add(pay1, pay2)) * 100,
    inst: inst.length,
    instF: (instF.length / inst.length) * 100,
    oui: oui.length,
    non: non.length,
    ration: (oui.length / form.length) * 100,
  });
};
