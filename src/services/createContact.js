const Contact = require('./models/contact'); // Votre modèle Mongoose pour les contacts

async function createContact(req, res) {
  try {
    const { surname, name, mail, phoneNumber } = req.body;
    const newContact = new Contact({ surname, name, mail, phoneNumber });
    await newContact.save();
    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création du contact' });
  }
}