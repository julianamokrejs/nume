const { response } = require("express");
const { verify } = require("jsonwebtoken");

//VIDEO 9 CURSO FULL STACK WEB PEDRO TECH
const validateToken = (req, res, next) => {
    const accessToken = req.header("accessToken");

    if (!accessToken) return res.json({ error: "O usuário não está logado"});

    try {
        const validToken = verify(accessToken, "importantsecret");
        req.user = validToken;

        if (validToken) {
            return next();
        }
    } catch (err) {
        return res.json({ error: err });
    }
}

module.exports = { validateToken };