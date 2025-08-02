const mongoose = require('mongoose');
const Dog = require('./models/dogs');

mongoose.connect('mongodb://127.0.0.1:27017/shelterDB')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB Error:', err));

const seedDogs = [
    { name: 'Buddy', age: 3, breed: 'Golden Retriever' },
    { name: 'Max', age: 5, breed: 'Beagle' },
    { name: 'Bella', age: 2, breed: 'Bulldog' },
    { name: 'Lucy', age: 4, breed: 'Poodle' }
];

const seedDB = async () => {
    // await Dog.deleteMany({});
    await Dog.insertMany(seedDogs);
    console.log('Database seeded with dogs');
};
seedDB();