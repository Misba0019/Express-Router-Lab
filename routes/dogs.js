const express = require('express');
const router = express.Router();
const Dog = require('../models/dogs');

// Get all dogs
router.get('/', async(req, res) => {
    const dogs = await Dog.find({});
    res.json(dogs);
});

// Create a new dog
router.post('/', async(req, res) => {
    const dog = new Dog(req.body);
    await dog.save();
    res.status(201).json({
        message: 'Dog created successfully',
        dog
    });
})

// Get a specific dog by ID
router.get('/:id', async(req, res) => {
    try{ 
        const dog = await Dog.findById(req.params.id);
        if (!dog) {
            return res.status(404).json({ error: 'Dog not found' });
        }
        res.json(dog);
    } catch (err) {
        res.status(400).json({ error: 'Invalid Dog ID format' });
    }
});

module.exports = router;
