const mongoose = require('mongoose');
let uuidv1 = require('uuidv1');
const crypto = require('crypto');

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, trim: true, maxlength: 32, required: true },
    lastName: { type: String, trim: true, maxlength: 32, required: true },
    email: {
      type: String,
      trim: true,
      maxlength: 32,
      required: true,
      unique: true,
    },
    hashed_password: { type: String, required: true },
    role: { type: Number, default: 1 },
  },
  { timestamps: true }
);

// Virtual field
userSchema
  .virtual('password')
  .set(function (password) {
    this._password = password;
    this.salt = uuidv1();
    this.hashed_password = this.encryptedPassword(password);
  })
  .get(function () {
    return this._password;
  });

userSchema.methods = {
  authentificate: function (plainText) {
    return this.encryptedPassword(plainText) === this.hashed_password;
  },
  encryptedPassword: function (password) {
    if (!password) return '';
    try {
      return crypto
        .createHmac('sha1', this.salt)
        .update(password)
        .digest('hex');
    } catch (error) {
      return '';
    }
  },
};

module.exports = mongoose.model('User', userSchema);
