const Cartographe = require('../models/Cartographe'); // cartographe Schema
const { errorHandler } = require('../helpers/dbErrorHandler'); // Authorizations

// Cartographe by id
exports.getByID = (req, res, next, id) => {
  Cartographe.findById(id).exec((error, cartographe) => {
    if (error || !cartographe) {
      return res.status(400).json({ error: 'cartographe not found' });
    }
    req.cartographe = cartographe;
    next();
  });
};

// Read cartographe
exports.read = (req, res) => {
  return res.json(req.cartographe);
};

// Create a new cartographe
exports.create = async (req, res) => {
  const cartographe = new Cartographe(req.body);
  cartographe.save((error, cartographe) => {
    if (error) {
      return res.status(400).json({ error: 'Unable to create cartographe' });
    }
    res.json(cartographe);
  });
};

// Update a cartographe
exports.update = async (req, res) => {
  const cartographe = req.cartographe;
  try {
    const update = req.body;

    const data = await Cartographe.findByIdAndUpdate({ _id: cartographe._id }, update , {new: true});

    res.json(data);
    
  } catch (err) {
    return res
      .status(400)
      .json({ error: 'Unable to update cartographe' + err });
  }
};

// Remove cartographe
exports.remove = async (req, res) => {
  try {
    const cartographe = req.cartographe;
    const data = await Cartographe.findOne({ _id: cartographe._id });

    data.remove((err, _data) => {
      if (err) {
        return res.status(400).json({
          error: 'Something went wrong',
        });
      }

      res.json({
        message: 'Cartographe deleted',
      });
    });
  } catch (err) {
    return res.status(400).json({ error: 'Error' + err });
  }
};

// Show all cartographes
exports.readAll = async (req, res) => {
  const data = await Cartographe.find({}).sort([['createdAt', 'desc']]);
  if (!data) {
    return res.status(400).json({ error: 'Something went wrong' });
  }
  res.json(data);
};
