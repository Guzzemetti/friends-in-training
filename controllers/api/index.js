const router = require('express').Router();

// Main Routes
const userRoutes = require('./userRoutes');
const resultsRoutes = require('./resultsRoutes');

router.use('/users', userRoutes);
router.use('/results', resultsRoutes);


module.exports = router;
