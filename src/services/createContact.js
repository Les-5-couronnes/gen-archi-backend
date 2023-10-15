import contactModel from '../models/contactModel.js';

export default async function createContact(req, res) {
  const { surname, name, mail, phoneNumber } = req.body;
  const existingContact = await contactModel.findOne({ mail: mail });
  if (existingContact) {
    return res.status(409).json({ message: "L'email existe déjà dans la base de données." });
  }
  const newContact = new contactModel({ surname, name, mail, phoneNumber });
  try {
    await newContact.save();
    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).json({ message: "Une erreur est survenue lors de la création du contact." });
  }
}