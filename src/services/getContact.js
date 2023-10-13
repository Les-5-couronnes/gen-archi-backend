import contactModel from '../models/contactModel.js';

export default async function getContacts() {

    const contacts = contactModel.find();
    return contacts
}