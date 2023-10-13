import express from "express";
import getContacts from "../services/getContact.js";
const router = express.Router()

router.get("/contacts", (req, res) => {
    const contacts = getContacts();
    res.send(contacts);
});

export default router;