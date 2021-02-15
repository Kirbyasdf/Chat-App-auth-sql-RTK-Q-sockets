const User = require("../models").User;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { APP_KEY } = process.env;

exports.loadUser = async (req, res) => {
	const { user } = req;
	console.log(user);

	try {
		res.status(200).json({
			sucess: true,
			data: user,
		});
	} catch (e) {
		return res.status(500).send({ success: false, error: e.message });
	}
};

exports.register = async (req, res) => {
	try {
		const dbEntry = { ...req.body, username: req.body.username.toLowerCase() };
		const user = await User.create(dbEntry);
		return sendTokenResponse(user, 200, res);
	} catch (e) {
		return res.status(500).send({ success: false, error: e.message });
	}
};

exports.login = async (req, res) => {
	const { username, password } = req.body;

	const valueToSearch = username.toLowerCase();

	try {
		const user = {
			id: 1,
			username: "test user",
			about: "hello I am a test object sent everytime if the token is valid",
		};
		return sendTokenResponse(user, 200, res);

		// again this is the full code, instead you have the above to make it easy
		// const user = await User.scope("withPassword").findOne({
		// 	where: {
		// 		username: valueToSearch,
		// 	},
		// });
		// if (user && (await bcrypt.compare(password, user.password))) {
		// 	return sendTokenResponse(user, 200, res);
		// }
		return res.status(401).send({
			succes: false,
			code: res.statusCode,
		});
	} catch (e) {
		return res.status(500).send({ success: false, error: e.message });
	}
};

const generateToken = (user) => {
	const { id } = user;
	const payload = {
		id,
	};

	const token = jwt.sign(payload, "DEMO KEY", {
		expiresIn: 86400,
	});

	return token;
};

const sendTokenResponse = (user, statusCode, res) => {
	const token = generateToken(user);
	// const token = generateToken(user.get({ raw: true }));
	// const options = {
	// 	expires: new Date(Date.now() + APP_KEY * 24 * 60 * 60 * 1000),
	// 	httpOnly: true,
	// };

	console.log(token);

	if (process.env.NODE_ENV === "production") {
		options.secure = true;
	}

	res.status(statusCode).cookie("token", token).json({ success: true, token });
};
