const mongoose = require('mongoose');
const uuidv1 = require('uuidv1');
const crypto = require('crypto');
const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, trim: true, required: true },
    lastName: { type: String, trim: true, required: true },
    email: { type: String, unique: true, trim: true, required: true },
    hashed_password: { type: String, trim: true, required: true },
    salt: String,
    role: { type: String, default: 'User' },
  },
  { timestamps: true }
);

// Virtual fields
userSchema
  .virtual('password')
  .set(function (password) {
    this._password = password;
    this.salt = uuidv1();
    this.hashed_password = this.encryptPwd(password);
  })
  .get(function () {
    return this._password;
  });

userSchema.methods = {
  authentificate: function (password) {
    return this.encryptPwd(password) == this.hashed_password;
  },
  encryptPwd: function (password) {
    if (!password) return '';
    try {
      return crypto
        .createHash('sha1', this.salt)
        .update(password)
        .digest('Hex');
    } catch (err) {
      return '';
    }
  },
};

module.exports = mongoose.model('User', userSchema);
