import express from "express";
import { getContacts } from "../services/getContact.js";
const router = express.Router()

router.get("/contacts", async (req, res) => {
    const contacts = await getContacts();
    res.send(contacts);
});

export default router;