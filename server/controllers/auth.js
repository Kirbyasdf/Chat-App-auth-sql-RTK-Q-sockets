const User = require("../models").User;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { APP_KEY } = process.env;

exports.loadUser = async (req, res) => {
	const { user } = req;

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
		const user = await User.scope("withPassword").findOne({
			where: {
				username: valueToSearch,
			},
		});
		if (user && (await bcrypt.compare(password, user.password))) {
			return sendTokenResponse(user, 200, res);
		}

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

	const options = {
		expires: new Date(Date.now() + APP_KEY * 24 * 60 * 60 * 1000),
		httpOnly: true,
	};

	if (process.env.NODE_ENV === "production") {
		options.secure = true;
	}

	const token = jwt.sign(payload, APP_KEY);
	return token;
};

const sendTokenResponse = (user, statusCode, res) => {
	const token = generateToken(user.get({ raw: true }));
	res.status(statusCode).cookie("token", token).json({ success: true, token });
};
