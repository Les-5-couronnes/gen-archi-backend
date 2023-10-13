const Contact = require('./models/contact');

async function getContacts(req, res) {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des contacts' });
  }
}