const jwt = require("jsonwebtoken");
const User = require("../models").User;

const { APP_KEY } = process.env;

protect = async (req, res, next) => {
	let token;

	if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
		token = req.headers.authorization.split(" ")[1];
	} else if (req.cookies.token) {
		token = req.cookies.token;
	}

	// Make sure token exists
	if (!token) {
		return res
			.status(401)
			.send({ success: false, msg: "Not Authorized for route use :no token " });
	}

	//verify token
	console.log("token sent", token);

	try {
		const decoded = jwt.verify(token, "DEMO KEY");
		console.log(decoded);
		const { id } = decoded;
		// code with database
		// user = await User.findByPk(id);
		// for your sake I am made it be the same everytime so it is easy
		const user = {
			id: 1,
			username: "test user",
			about: "hello I am a test object sent everytime if the token is valid",
		};

		req.user = user;
		next();
	} catch (err) {
		return res.status(401).send({ success: false, msg: "Token invalid" });
	}
};

module.exports = { protect };
