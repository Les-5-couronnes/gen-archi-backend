import contactModel from '../models/contactModel.js';

export default async function deleteContact(req, res) {
    const email = req.params.email;

  try {   
    const contact = await contactModel.findOne({ mail: email });

    if (!contact) {
      return res.status(404).json({ message: "Contact non trouvé." });
    }
    await contact.deleteOne();
    res.status(204).end(); 
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Une erreur est survenue lors de la suppression du contact." });
  }
}