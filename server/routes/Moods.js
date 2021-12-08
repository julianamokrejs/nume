const express = require("express");
const router = express.Router();
const { Moods } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.get("/", async (req, res) => {
    const moodList = await Moods.findAll();
    res.json(moodList);
});

router.get("/byId/:id", async (req, res) => {
    const id = req.params.id;
    const mood = await Moods.findByPk(id);
    res.json(mood);
});



router.post("/", validateToken, async (req, res) => {
    const mood = req.body;

    //AULA 10 PEDRO TECH
    // const username = req.user.username;
    // mood.username = username;

    await Moods.create(mood);
    res.json(mood);
});

module.exports = router;