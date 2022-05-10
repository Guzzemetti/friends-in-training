const router = require('express').Router();

// Main Routes
const userRoutes = require('./userRoutes');
const resultsRoutes = require('./resultsRoutes');
const gymRoutes = require('./gymRoutes')

router.use('/users', userRoutes);
router.use('/results', resultsRoutes);
router.use('/gyms', gymRoutes);


module.exports = router;
