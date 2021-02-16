const jwt = require("jsonwebtoken");
const User = require("../models").User;

const { APP_KEY } = process.env;

protect = async (req, res, next) => {
	let token;

	if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
		token = req.headers.authorization.split(" ")[1];
	} else if (req.cookies && req.cookies.token) {
		token = req.cookies.token;
	}

	if (!token) {
		return res
			.status(401)
			.send({ success: false, msg: "Not Authorized for route use :no token " });
	}

	try {
		const decoded = jwt.verify(token, APP_KEY);
		const { id } = decoded;
		const user = await User.findByPk(id);

		req.user = user;
		next();
	} catch (err) {
		return res.status(401).send({ success: false, msg: "Token invalid" });
	}
};

module.exports = { protect };
