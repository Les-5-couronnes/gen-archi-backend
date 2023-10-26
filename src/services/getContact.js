import contactModel from '../models/contactModel.js';

export async function getContacts(req, res) {
    try {
        const contacts = await contactModel.find();

        res.status(200).json(contacts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Une erreur est survenue lors de la recuperation des contacts." });
    }
}