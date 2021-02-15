const { validationResult } = require("express-validator");

exports.validate = (req, res, next) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		console.error(errors);
		return res.status(400).json({ success: true, errors: errors.array() });
	}
	next();
};
