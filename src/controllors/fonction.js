const Fonction = require('../models/Fonction'); // Fonction Schema
const { errorHandler } = require('../helpers/dbErrorHandler'); // Authorizations

// Fonction by id
exports.getByID = (req, res, next, id) => {
  Fonction.findById(id).exec((error, Fonction) => {
    if (error || !Fonction) {
      return res.status(400).json({ error: 'Fonction not found' });
    }
    req.fonction = fonction;
    next();
  });
};

// Read Fonction
exports.read = (req, res) => {
  return res.json(req.fonction);
};

// Create a new Fonction
exports.create = async (req, res) => {
  const fonction = new Fonction(req.body);
  fonction.save((error, fonction) => {
    if (error) {
      return res.status(400).json({ error: 'Something went wrong' });
    }
    res.json(fonction);
  });
};

// Update a Fonction
exports.update = async (req, res) => {
  const fonction = req.fonction;
  try {
    const { name } = req.body;

    const data = await Fonction.findOne({ _id: fonction._id });

    // Pass the request body to user and save new user data in database
    Object.assign(data, {
      name,
    });

    data.save();

    res.json(data);
  } catch (err) {
    return res.status(400).json({ error: 'Unable to update Fonction' + err });
  }
};

// Remove Fonction
exports.remove = async (req, res) => {
  try {
    const fonction = req.fonction;
    const data = await Fonction.findOne({ _id: fonction._id });

    data.remove((err, _data) => {
      if (err) {
        return res.status(400).json({
          error: 'Something went wrong',
        });
      }

      res.json({
        message: 'Fonction deleted',
      });
    });
  } catch (err) {
    return res.status(400).json({ error: 'Error' + err });
  }
};

// Show all Fonctions
exports.readAll = async (req, res) => {
  const data = await Fonction.find({}).sort([['createdAt', 'desc']]);
  if (!data) {
    return res.status(400).json({ error: 'Something went wrong' });
  }
  res.json(data);
};
