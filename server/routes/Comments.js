const express = require("express");
const router = express.Router();
const { Comments } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");
const { json } = require("sequelize/dist");
const db = require("../models");

router.get("/", async (req, res) => {
    const listOfComments = await Comments.findAll();
    res.json(listOfComments);
})


router.post("/", async (req, res) => {
    const comment = req.body;
    // comment.username = req.user.username
    try {
    await Comments.create(comment);
    res.json(comment);
    } catch (error) {
        res.json({error: "Erro"})
    }
})

router.put('/update', async (req, res) => {
    const id = req.body.id;
    const title = req.body.title;
    await db.query("UPDATE comments SET title = ? WHERE id = ?", 
    [title, id], 
    (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.send(result);
        }
    });
})

router.delete("/:commentId", async (req, res) => {
    const commentId = req.params.commentId;
    await Comments.destroy({
        where: {
            id: commentId,
        },
    })
    res.json("apagado")
})



module.exports = router;

