const Instruction = require('../models/Instruction'); // instruction Schema
const { errorHandler } = require('../helpers/dbErrorHandler'); // Authorizations

// instruction by id
exports.getByID = (req, res, next, id) => {
  Instruction.findById(id).exec((error, instruction) => {
    if (error || !instruction) {
      return res.status(400).json({ error: 'instruction not found' });
    }
    req.instruction = instruction;
    next();
  });
};

// Read instruction
exports.read = (req, res) => {
  return res.json(req.instruction);
};

// Create a new instruction
exports.create = async (req, res) => {
  const instruction = new Instruction(req.body);
  instruction.save((error, instruction) => {
    if (error) {
      return res.status(400).json({ error: 'Something went wrong' });
    }
    res.json({ instruction });
  });
};

// Update a instruction
exports.update = async (req, res) => {
  const instruction = req.instruction;
  try {
    const { date, montant, agent, libelle, description } = req.body;

    const data = await Instruction.findOne({ _id: instruction._id });

    // Pass the request body to user and save new user data in database
    Object.assign(instruction, {
      date,
      montant,
      agent,
      libelle,
      description,
    });

    data.save();

    res.json(data);
  } catch (err) {
    return res
      .status(400)
      .json({ error: 'Unable to update instruction' + err });
  }
};

// Remove instruction
exports.remove = async (req, res) => {
  try {
    const instruction = req.instruction;
    const data = await Instruction.findOne({ _id: instruction._id });

    data.remove((err, _data) => {
      if (err) {
        return res.status(400).json({
          error: 'Something went wrong',
        });
      }

      res.json({
        message: 'instruction deleted',
      });
    });
  } catch (err) {
    return res.status(400).json({ error: 'Error' + err });
  }
};

// Show all instructions
exports.readAll = async (req, res) => {
  const data = await Instruction.find({}).sort([['createdAt', 'desc']]);
  if (!data) {
    return res.status(400).json({ error: 'Something went wrong' });
  }
  res.json(data);
};
