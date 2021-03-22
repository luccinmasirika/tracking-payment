const Fonctionnaire = require('../models/Fonctionnaire'); // Fonctionnaire Schema
const { errorHandler } = require('../helpers/dbErrorHandler'); // Authorizations

// Fonctionnaire by id
exports.getByID = (req, res, next, id) => {
  Fonctionnaire.findById(id).exec((error, fonctionnaire) => {
    if (error || !fonctionnaire) {
      return res.status(400).json({ error: 'Fonctionnaire not found' });
    }
    req.fonctionnaire = fonctionnaire;
    next();
  });
};

// Read Fonctionnaire
exports.read = (req, res) => {
  return res.json(req.fonctionnaire);
};

// Create a new Fonctionnaire
exports.create = async (req, res) => {
  const fonctionnaire = new Fonctionnaire(req.body);
  fonctionnaire.save((error, fonctionnaire) => {
    if (error) {
      return res.status(400).json({ error: 'Something went wrong' });
    }
    res.json(fonctionnaire);
  });
};

// Update a Fonctionnaire
exports.update = async (req, res) => {
  const fonctionnaire = req.fonctionnaire;
  try {
    const { firstName, lastName, fonction } = req.body;

    const data = await Fonctionnaire.findOne({ _id: fonctionnaire._id });

    // Pass the request body to user and save new user data in database
    Object.assign(data, {
      firstName,
      lastName,
      fonction,
    });

    data.save();

    res.json(data);
  } catch (err) {
    return res
      .status(400)
      .json({ error: 'Unable to update Fonctionnaire' + err });
  }
};

// Remove Fonctionnaire
exports.remove = async (req, res) => {
  try {
    const fonctionnaire = req.fonctionnaire;
    const data = await Fonctionnaire.findOne({ _id: fonctionnaire._id });

    data.remove((err, _data) => {
      if (err) {
        return res.status(400).json({
          error: 'Something went wrong',
        });
      }

      res.json({
        message: 'Fonctionnaire deleted',
      });
    });
  } catch (err) {
    return res.status(400).json({ error: 'Error' + err });
  }
};

// Show all Fonctionnaires
exports.readAll = async (req, res) => {
  const data = await Fonctionnaire.find({}).sort([['createdAt', 'desc']]);
  if (!data) {
    return res.status(400).json({ error: 'Something went wrong' });
  }
  res.json(data);
};
