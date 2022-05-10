const router = require('express').Router();
const { User } = require('../../models');


router.get('/',  (req, res) => {
  User.findAll()
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err));
});





module.exports = router;