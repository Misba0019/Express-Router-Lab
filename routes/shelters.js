const express = require('express');
const router = express.Router();

const shelters = [
    { id: 1, name: 'Hope Animal Shelter' },
    { id: 2, name: 'City Paws Rescue' },
    { id: 3, name: 'Safe Haven Shelter' }
];

// Get all shelters
router.get('/', (req, res) => {
    res.json(shelters);
});

// Create a new shelter
router.post('/', (req, res) => {
    const { name } = req.body;
    const newShelter = {
        id: shelters.length + 1,
        name
    };
    shelters.push(newShelter);
    res.status(201).json({
        message: 'Shelter created',
        shelter: newShelter
    });
});

// View a single shelter by ID
router.get('/:id', (req, res) => {
    const shelterId = parseInt(req.params.id);
    const found = shelters.find(s => s.id === shelterId);
    if (!found) {
        return res.status(404).json({ error: 'Shelter not found' });
    }
    res.json(found);
});

module.exports = router;