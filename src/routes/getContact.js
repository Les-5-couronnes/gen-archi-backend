import express from "express";
const router = express.Router()

router.get("/contacts", (req, res) => {
    res.send("Here are the contacts");
});

export default router;