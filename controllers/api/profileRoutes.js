const router = require('express').Router();
const { User } = require('../../models');

router.get('/', async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        include: [{ all: true, nested: true }],
        // attributes: { exclude: ['password'] }
      });
      const users = userData.get({ plain: true });
      res.render('profile', {
        users,
        logged_in: req.session.logged_in,

      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;