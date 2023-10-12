import express from "express";
const router = express.Router()

router.get("/editContact/:id", (req, res) => {
    res.send("Contact : " + req.params.id + " has been edited");
});

export default router;