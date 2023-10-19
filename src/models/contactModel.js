import mongoose from "mongoose";
const { Schema, model } = mongoose;

const contactSchema = new Schema({
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
    unique: true
  },
  phoneNumber: {
    type: String,
    required: true
  }
});

const Contact = model('Contact', contactSchema);
export default Contact;