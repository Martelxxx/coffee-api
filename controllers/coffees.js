const Coffee = require('../models/coffee');
const express = require('express');
const router = express.Router();

// CREATE - POST - /coffees
router.post('/', async (req, res) => {
    try {
        const coffee = await Coffee.create(req.body);
        res.status(201).json(coffee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// READ - GET - /coffees
router.get('/', async (req, res) => {
    try {
        const coffees = await Coffee.find();
        res.json(coffees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// READ - GET - /coffees/:coffeeId
router.get('/:coffeeId', async (req, res) => {
    try {
        const coffee = await Coffee.findById(req.params.coffeeId);
        res.json(coffee);
    } catch (error) {
        res.status(404).json({ message: 'Coffee not found' });
    }
});

// DELETE - DELETE - /coffees/:coffeeId
router.delete('/:coffeeId', async (req, res) => {
    try {
        const coffee = await Coffee.findByIdAndDelete(req.params.coffeeId);
        res.json(coffee);
    } catch (error) {
        res.status(404).json({ message: 'Coffee not found' });
    }
});

// UPDATE - PUT - /coffees/:coffeeId
router.put('/:coffeeId', async (req, res) => {
    try {
        const coffee = await Coffee.findByIdAndUpdate(req.params.coffeeId, req.body, { new: true });
        res.json(coffee);
    } catch (error) {
        res.status(404).json({ message: 'Coffee not found' });
    }
});

module.exports = router;