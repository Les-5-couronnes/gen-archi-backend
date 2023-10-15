import contactModel from '../models/contactModel.js';

export async function getContacts() {

    const contacts = contactModel.find();
    return contacts
}