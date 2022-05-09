const router = require("express").Router();
const { Gym } = require("../models");

router.get("/Gym/:id", async (req, res) => {
	try {
		const gymData = await Gym.findByPk(req.params.id, {
			include: [
				{
					model: Gym,
					attributes: ["name"],
				},
			],
		});

		const gym = gymData.get({ plain: true });

		res.render("gym", {
			...gym,
			logged_in: req.session.logged_in,
		});
	} catch (err) {
		res.status(500).json(err);
	}
});




module.exports = router;
