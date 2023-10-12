import express from "express";
const router = express.Router()

router.get("/deleteContact/:id", (req, res) => {
    res.send("Contact : " + req.params.id + " has been deleted");
});

export default router;