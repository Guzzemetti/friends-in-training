const router = require('express').Router();
const { User } = require('../../models');


router.get('/',  (req, res) => {
  User.findAll()
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err));
});

router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
    });
    if (!userData) {
      res.status(404).json({ message: 'No user with that ID'})
      return;
    } res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;