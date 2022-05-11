const router = require('express').Router();
const { User } = require('../../models');


router.get('/', async (req, res) => {
  try {

    const userData = await User.findAll();
    const users = userData.map((user) => user.get({ plain: true }));
    // Pass serialized data and session flag into template
    res.render('userResults', { 
      layout: 'main',
      users, 
      // logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
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