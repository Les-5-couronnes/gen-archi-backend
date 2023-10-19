import express from "express";
import { getContacts } from "../services/getContact.js";
const router = express.Router()

router.get("/get-contacts", async (req, res) => {
    await getContacts(req, res);
});

export default router;