`use strict`;
const express = require('express');
const router = express.Router();

const { Commint } = require('../models/index');

// Routes 
router.get('/commint', getCommint);
router.post('/commint', createCommint);
router.get('/commint/:id', getOneCommint);
router.delete('/commint/:id', deleteCommint);
router.put('/commint/:id', updatCommint);

async function getCommint(req, res) {
    let commint = await Commint.read();
    res.status(200).json({
        commint
    })
};

async function createCommint(req, res) {
    let newCommint = req.body;
    const commint = await Commint.create(newCommint);
    res.status(201).json(commint);
};

async function getOneCommint(req, res) {
    const id = req.params.id;
    const commint = await Commint.read(id);
    res.status(200).json({ commint });
};

async function deleteCommint(req, res) {
    const id = req.params.id;
    const commintDeleted = await Commint.delete(id);
    res.status(204).json({
        message: `the deleted commint successful for id : ${id}`
    });

};

async function updatCommint(req, res) {
    const id = req.params.id;
    const updateData = req.body;

    const commintUpdate = await Commint.update(id, updateData);
    res.status(200).json(commintUpdate);
}


module.exports = router;