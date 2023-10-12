import express from "express";
const router = express.Router()

router.post("/createContact", (req, res) => {
    res.send("Contact has been created");
});

export default router;