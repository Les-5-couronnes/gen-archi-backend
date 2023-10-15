import express from "express";
import createContact from "../services/createContact.js";
const router = express.Router()

router.post("/createContact", async(req, res) => {
    return await createContact(req, res);
});

export default router;