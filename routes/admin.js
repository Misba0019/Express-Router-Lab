const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    if(req.query.isAdmin === 'true'){
        return next();
    }
    res.send('Access Denied. Admins Only!');
});

// Admin Dashboard
router.get('/dashboard', (req, res) => {
    res.send(`
        <h1>Admin Dashboard</h1>
        <ul>
            <li><a href="/admin/stats?isAdmin=true">View Stats</a></li>
            <li><a href="/admin/maintenance?isAdmin=true">Run Maintenance</a></li>
        </ul>
    `);
});

// Simulate viewing site stats
router.get('/stats', (req, res) => {
    res.json({
        usersOnline: 7,
        serverStatus: 'OK',
        uptime: '3 hours'
    });
});

// Simulate running a maintenance script
router.get('/maintenance', (req, res) => {
    res.send('Maintenance tasks executed successfully!');
});

module.exports = router;