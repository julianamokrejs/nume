const express = require('express');
const router = express.Router();
const { Events } = require("../models");

router.get("/", (req, res) => {
    res.send("mds socorro");
})

router.post("/", async (req, res) => {
    const event = req.body;
    await Events.create(event);
    res.json(event);
})

module.exports = router;