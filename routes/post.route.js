`use strict`;
const express = require('express');
const router = express.Router();

const { Message } = require('../models/index');

router.get('/message', getMessage);
router.post('/message', createMessage);

async function getMessage(req, res) {
    let message = await Message.findAll();
    res.status(200).json({
        message
    })
};

async function createMessage(req, res) {
    let newMessage = req.body;
    const message = await Message.creat(newMessage);
    res.status(201).json(message);
}


module.exports = router;