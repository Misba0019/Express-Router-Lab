const express = require('express');
const app = express();
const shelterRoutes =  require('./routes/shelters');
const dogsRoutes = require('./routes/dogs');
const adminRoutes = require('./routes/admin');
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1:27017/shelterDB')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB Error:', err));

// Middleware logging the request method and path
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

// Middleware for shelters
app.use('/shelters', shelterRoutes);
// This will use the routes defined in shelters.js

// Middleware for dogs
app.use('/dogs', dogsRoutes);

// Middleware for admin
app.use('/admin', adminRoutes);

// Catch-all route for undefined routes
app.use((req, res) => {
    res.status(404).send('Route Not Found');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})