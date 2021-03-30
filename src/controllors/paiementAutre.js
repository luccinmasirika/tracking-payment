const PaiementAutre = require('../models/PaiementAutre'); // paiementAutre Schema
const { errorHandler } = require('../helpers/dbErrorHandler'); // Authorizations

// paiementAutre by id
exports.getByID = (req, res, next, id) => {
  PaiementAutre.findById(id).exec((error, paiementAutre) => {
    if (error || !paiementAutre) {
      return res.status(400).json({ error: 'Paiement not found' });
    }
    req.paiementAutre = paiementAutre;
    next();
  });
};

// Read paiementAutre
exports.read = (req, res) => {
  return res.json(req.paiementAutre);
};

// Create a new paiementAutre
exports.create = async (req, res) => {
  const data = new PaiementAutre(req.body);
  data.save((error, paiementAutre) => {
    if (error) {
      return res.status(400).json({ error: 'Something went wrong' + error });
    }
    res.json(paiementAutre);
  });
};

// Update a paiementAutre
exports.update = async (req, res) => {
  const paiementAutre = req.paiementAutre;
  try {
    const {
      paiement,
      montant,
      reffence,
      libelle,
      beneficiaire,
      province,
      date,
      description,
    } = req.body;

    const data = await PaiementAutre.findOne({ _id: paiementAutre._id });

    // Pass the request body to user and save new user data in database
    Object.assign(data, {
      paiement,
      montant,
      reffence,
      libelle,
      beneficiaire,
      province,
      date,
      description,
    });


    data.save();

    res.json(data);
  } catch (err) {
    return res.status(400).json({ error: 'Unable to update paiement' + err });
  }
};

// Remove paiementAutre
exports.remove = async (req, res) => {
  try {
    const paiementAutre = req.paiementAutre;
    const data = await PaiementAutre.findOne({ _id: paiementAutre._id });

    data.remove((err, _data) => {
      if (err) {
        return res.status(400).json({
          error: 'Something went wrong',
        });
      }

      res.json({
        message: 'Paiement deleted',
      });
    });
  } catch (err) {
    return res.status(400).json({ error: 'Error' + err });
  }
};

// Show all paiementAutres
exports.readAll = async (req, res) => {
  const data = await PaiementAutre.find({}).sort([['createdAt', 'desc']]);
  if (!data) {
    return res.status(400).json({ error: 'Something went wrong' });
  }
  res.json(data);
};
