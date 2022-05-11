const router = require('express').Router();
const { User } = require('../../models');

router.get('/:id', async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.params.id, {
        include: [{ all: true, nested: true }],
        // attributes: { exclude: ['password'] }
      });
      const users = userData.get({ plain: true });
      res.render('profile', {
        users,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;