const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  surname: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  mail: {
    type: String,
    required: true,
    unique: true // L'adresse mail doit être unique
  },
  phoneNumber: {
    type: String,
    required: true
  }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;