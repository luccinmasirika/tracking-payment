const validateRequest = (req, res, schema, next) => {
  const option = {
    abortEarly: false, // include all errors
    allowUnknown: true, // include all errors
    stripUnknown: true, // remove unknown props
  }

  const { error } = schema.validate(req.body, option)

  if (error) {
    res.status(422).json({
      error: error.details.map((err) => err.message),
    })
  } else {
    next()
  }
}

module.exports = validateRequest

/** On FRONTEND
 * const [nameErr, emailErr, passwordErr] = errors
 * Must be used in frontend to get all errros per fields
 */
