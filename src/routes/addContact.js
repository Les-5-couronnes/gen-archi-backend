import express from "express";
import addContact from "../services/addContact.js";
const router = express.Router()

router.post("/add-contact", async(req, res) => {
    await addContact(req, res);
});

export default router;