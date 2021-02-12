const { body } = require("express-validator");

exports.rules = (() => {
	return [body("username").notEmpty(), body("password").isLength({ min: 5 })];
})();
