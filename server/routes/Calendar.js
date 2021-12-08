const express = require("express");
const router = express.Router();
const Event = require("../models/Calendar");
const moment = require('moment');
const { validateToken } = require("../middlewares/AuthMiddleware");


router.post('/create-event', validateToken, async (req, res) => {
    const event = (req.body);
    await event.save();
    res.sendStatus(201);
});

router.get('/get-events', async (req, res) => {
    const events = await Event.findAll({
        start: { $gte: moment(req.query.start).toDate() },
        end: { $lte: moment(req.query.end).toDate() }
    });
    res.send(events);

});

module.exports = router;
