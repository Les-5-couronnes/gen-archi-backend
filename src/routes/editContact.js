import express from "express";
import editContact from "../services/editContact.js";
const router = express.Router()

router.post("/edit-contact", async (req, res) => {
    await editContact(req, res);
});

export default router;