const Joi = require('joi'); // Module used for validators
const validateRequest = require('./validatorsRequest');

exports.signupValidator = (req, res, next) => {
  const schema = Joi.object().keys({
    firstName: Joi.string().label('First Name').min(3).max(32).required(),
    lastName: Joi.string().label('Last Name').min(3).max(32).required(),
    email: Joi.string().label('Email').min(3).max(32).required().email(),
    password: Joi.string().label('Password').min(6).max(32).required(),
    role: Joi.string().label('Role').valid('Admin', 'User'),
  });
  validateRequest(req, res, schema, next);
};

exports.updateUserValidator = (req, res, next) => {
  const schemaRuler = {
    firstName: Joi.string().label('Name').min(3).max(32).required().empty(''),
    lastName: Joi.string().label('Name').min(3).max(32).required().empty(''),
    email: Joi.string()
      .label('Email')
      .min(3)
      .max(32)
      .required()
      .email()
      .empty(''),
  };

  // Only admin can update the role
  if (req.user.role === 'Admin') {
    schemaRuler.role = Joi.string()
      .label('Role')
      .valid('Admin', 'User')
      .required()
      .empty('');
  }
  const schema = Joi.object().keys(schemaRuler);

  validateRequest(req, res, schema, next);
};

exports.updatePasswordValidator = (req, res, next) => {
  const schema = Joi.object().keys({
    password: Joi.string().label('Name').min(6).max(32).required().empty(''),
    newPassword: Joi.string()
      .label('New Password')
      .min(6)
      .max(32)
      .required()
      .empty(''),
    confirmNewPassword: Joi.string()
      .label('Confirm Password')
      .valid(Joi.ref('newPassword'))
      .required()
      .empty(''),
  });
  validateRequest(req, res, schema, next);
};

exports.cartographeValidator = (req, res, next) => {
  const schema = Joi.object().keys({
    firstName: Joi.string().label('First Name').min(3).max(32).required(),
    lastName: Joi.string().label('Last Name').min(3).max(32).required(),
    email: Joi.string().label('Email').min(3).max(32).required().email()
  });
  validateRequest(req, res, schema, next);
};
