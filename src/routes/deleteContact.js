import express from "express";
import deleteContact from "../services/deleteContact.js";
const router = express.Router()

router.delete("/deleteContact/:email", async (req, res) => {
    await deleteContact(req, res);
});

export default router;