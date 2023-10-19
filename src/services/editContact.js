import contactModel from '../models/contactModel.js';

export default async function editContact(req, res) {
    const { mail, updatedContact } = req.body;

    try {
        const existingContact = await contactModel.findOne({ mail });
        if (!existingContact) {
            return res.status(404).json({ message: "Contact non trouvé." });
        }

        existingContact.surname = updatedContact.surname;
        existingContact.name = updatedContact.name;
        existingContact.mail = updatedContact.mail;
        existingContact.phoneNumber = updatedContact.phoneNumber;

        await existingContact.save();

        res.status(200).json({ message: "Contact mis à jour avec succès." });
    } catch (error) {
        res.status(500).json({ message: "Une erreur est survenue lors de la mise à jour du contact." });
    }
}