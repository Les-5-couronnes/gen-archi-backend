import contactModel from '../models/contactModel.js';

export default async function createContact(req) {
  const { surname, name, mail, phoneNumber } = req;
  const newContact = new contactModel({ surname, name, mail, phoneNumber });
  await newContact.save();
}