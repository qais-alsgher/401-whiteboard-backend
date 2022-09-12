`use strict`;
const express = require('express');
const router = express.Router();

const { Message } = require('../models/index');

// Routes 
router.get('/message', getMessage);
router.post('/message', createMessage);
router.get('/message/:id', getOneMessage);
router.delete('/message/:id', deleteMessage);
router.put('/message/:id', updatMessage);

async function getMessage(req, res) {
    let message = await Message.findAll();
    res.status(200).json({
        message
    })
};

async function createMessage(req, res) {
    let newMessage = req.body;
    const message = await Message.create(newMessage);
    res.status(201).json(message);
};

async function getOneMessage(req, res) {
    const id = req.params.id;
    const message = await Message.findOne({
        where: { id: id }
    });
    res.status(200).json({ message });
};

async function deleteMessage(req, res) {
    const id = req.params.id;
    const messageDeleted = await Message.destroy({
        where: { id: id }
    });
    res.status(204).json(messageDeleted);

};

async function updatMessage(req, res) {
    const id = req.params.id;
    const updateData = req.body;
    // first way to put method
    // const message = await Message.findOne({
    //     where: { id: id }
    // });
    // const messageUpdate = await message.update(updateData);

    // second way to put method
    const messageUpdate = await Message.update(
        { messageContent: updateData.messageContent },
        { where: { id: id } });
    res.status(200).json(messageUpdate);
}


module.exports = router;