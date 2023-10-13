import express from "express";
import createContact from "../services/createContact";
const router = express.Router()

router.post("/createContact", (req, res) => {
    createContact(req.body);
    res.send("Contact has been created");
});

export default router;