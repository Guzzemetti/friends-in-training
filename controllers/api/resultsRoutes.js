const router = require('express').Router();
const { User } = require('../../models');


router.get('/results', (req, res) => {
    // find all Users as results
    User.findAll({
      include: [User],
    })
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));    
  });








module.exports = router;