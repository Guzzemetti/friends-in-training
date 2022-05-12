const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

// route to find all users in database
// this affects the userResults handlebar
// THIS SHOULD CHANGE TO GO TO PROFILE
router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['id', 'ASC']],
    });
    const users = userData.map((user) => user.get({ plain: true }));
    res.render('userResults', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// route to send visitor to login page at first UNLESS logged in
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login', {
    layout: 'landing',
  });
});

module.exports = router;
