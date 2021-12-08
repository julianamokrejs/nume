const express = require("express");
const router = express.Router();
const { Users } = require("../models");

//ENCRIPTADOR DE SENHA
const bcrypt = require("bcrypt");

//AUTENTICAÇÃO ATRAVÉS DE TOKEN
const {sign} = require("jsonwebtoken");
const { validateToken } = require("../middlewares/AuthMiddleware");

//REGISTER
router.post("/", async (req, res) => {
    const { username, password, firstname, lastname, email } = req.body;

    //ENCRIPTA A SENHA
    bcrypt.hash(password, 10).then((hash) => {
        //CRIA O USUÁRIO
        Users.create({
            username: username,
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: hash, 
        })
        res.json(password);
    });
});

//LOGIN
router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await Users.findOne({ where: { username: username } });

    //VERIFICA SE O USUÁRIO EXISTE
    if (!user) res.json({ error: "Usuário não encontrado"});

    //COMPARA A SENHA FORNECIDA COM A SENHA ARMAZENADA
    bcrypt.compare(password, user.password).then( (match) => {
        if (!match) res.json({ error: "Senha incorreta" });

        //AUTENTICAÇÃO JWT
        const accessToken = sign(
            { username: user.username, id: user.id },
            'importantsecret'
        );
        res.json({
            token: accessToken, 
            username: username, 
            id: user.id
        });
    })
});

router.get('/auth', validateToken, (req, res) => {
    res.json(req.user)
});

module.exports = router;

