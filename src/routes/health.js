import express from "express";
const router = express.Router()

router.get("/health", (req, res) => {
    res.send("Healthy backend");
});

export default router;