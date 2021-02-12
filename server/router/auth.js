const router = require("express").Router();
const { body } = require("express-validator");

const { register, login } = require("../controllers/auth");

router.post(
	"/register",
	[
		body("firstName").notEmpty(),
		body("lastName").notEmpty(),
		body("gender").notEmpty(),
		body("email").isEmail(),
		body("password").notEmpty(),
	],
	register
);

router.post("/login", login);

module.exports = router;
