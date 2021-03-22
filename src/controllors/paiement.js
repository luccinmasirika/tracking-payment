const Paiement = require('../models/Paiement'); // paiement Schema
const { errorHandler } = require('../helpers/dbErrorHandler'); // Authorizations

// paiement by id
exports.getByID = (req, res, next, id) => {
  Paiement.findById(id).exec((error, paiement) => {
    if (error || !paiement) {
      return res.status(400).json({ error: 'paiement not found' });
    }
    req.paiement = paiement;
    next();
  });
};

// Read paiement
exports.read = (req, res) => {
  return res.json(req.paiement);
};

// Create a new paiement
exports.create = async (req, res) => {
  const paiement = new Paiement(req.body);
  paiement.save((error, paiement) => {
    if (error) {
      return res.status(400).json({ error: 'Something went wrong' });
    }
    res.json({ paiement });
  });
};

// Update a paiement
exports.update = async (req, res) => {
  const paiement = req.paiement;
  try {
    const { payment, description, montant } = req.body;

    const data = await Paiement.findOne({ _id: paiement._id });

    // Pass the request body to user and save new user data in database
    Object.assign(paiement, {
      payment,
      description,
      montant,
    });

    data.save();

    res.json(data);
  } catch (err) {
    return res.status(400).json({ error: 'Unable to update paiement' + err });
  }
};

// Remove paiement
exports.remove = async (req, res) => {
  try {
    const paiement = req.paiement;
    const data = await Paiement.findOne({ _id: paiement._id });

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

// Show all paiements
exports.readAll = async (req, res) => {
  const data = await Paiement.find({}).sort([['createdAt', 'desc']]);
  if (!data) {
    return res.status(400).json({ error: 'Something went wrong' });
  }
  res.json(data);
};
