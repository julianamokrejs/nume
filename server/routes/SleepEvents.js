const express = require("express");
const router = express.Router();
const { Users } = require("../models");

//ENCRIPTADOR DE SENHA
const bcrypt = require("bcrypt");

//AUTENTICAÇÃO ATRAVÉS DE TOKEN
const {sign} = require("jsonwebtoken");
const { validateToken } = require("../middlewares/AuthMiddleware");
const SleepEvent = require("../models/SleepEvent");

//REGISTER
router.post("/", async (req, res) => {
    const { username, SleepComment, date } = req.body;

    //ENCRIPTA A SENHA
    bcrypt.hash(password, 10).then((hash) => {
        //CRIA O USUÁRIO
        Users.create({
            username: username,
            SleepComment: firstname,
            date: lastname,
        })
        res.json(SleepComment);
    });
});

module.exports = router;

