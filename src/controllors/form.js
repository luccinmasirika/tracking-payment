const Form = require('../models/Form'); // Form Schema
const { errorHandler } = require('../helpers/dbErrorHandler'); // Authorizations

// Form by id
exports.getByID = (req, res, next, id) => {
  Form.findById(id).exec((error, form) => {
    if (error || !form) {
      return res.status(400).json({ error: 'Form not found' });
    }
    req.form = form;
    next();
  });
};

// Read Form
exports.read = (req, res) => {
  return res.json(req.form);
};

// Create a new Form
exports.create = async (req, res) => {
  const form = new Form(req.body);
  form.save((error, form) => {
    if (error) {
      return res.status(400).json({ error: 'Something went wrong' + error });
    }
    res.json(form);
  });
};

// Update a Form
exports.update = async (req, res) => {
  const form = req.form;
  try {
    const { name, fond, bank, montant, date, description } = req.body;

    const data = await Form.findOne({ _id: form._id });

    // Pass the request body to user and save new user data in database
    Object.assign(data, {
      name,
      fond,
      bank,
      montant,
      date,
      description,
    });

    data.save();

    res.json(data);
  } catch (err) {
    return res.status(400).json({ error: 'Unable to update Form' + err });
  }
};

// Remove Form
exports.remove = async (req, res) => {
  try {
    const form = req.form;
    const data = await Form.findOne({ _id: form._id });

    data.remove((err, _data) => {
      if (err) {
        return res.status(400).json({
          error: 'Something went wrong',
        });
      }

      res.json({
        message: 'Form deleted',
      });
    });
  } catch (err) {
    return res.status(400).json({ error: 'Error' + err });
  }
};

// Show all Forms
exports.readAll = async (req, res) => {
  const data = await Form.find({}).sort([['createdAt', 'desc']]);
  if (!data) {
    return res.status(400).json({ error: 'Something went wrong' });
  }
  res.json(data);
};
