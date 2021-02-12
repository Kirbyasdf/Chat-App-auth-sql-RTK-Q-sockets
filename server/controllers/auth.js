const User = require("../models").User;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { APP_KEY } = process.env;

exports.register = async (req, res) => {
	try {
		// req.body = {username: "exAMpLE", passowrd: "string"}
		const dbEntry = { ...req.body, username: req.body.username.toLowerCase() };
		const user = await User.create(dbEntry);
		const userWithToken = generateToken(user.get({ raw: true }));
		return res.send({
			succes: true,
			userWithToken,
		});
	} catch (e) {
		return res.status(500).send({ success: false, error: e.message });
	}
};

exports.login = async (req, res) => {
	const { username, password } = req.body;
	const valueToSearch = username.toLowerCase();

	try {
		const user = await User.findOne({
			where: {
				username: valueToSearch,
			},
		});
		console.log(user);
		if (user && (await bcrypt.compare(password, user.password))) {
			const userWithToken = generateToken(user.get({ raw: true }));
			return res.send({
				succes: true,
				userWithToken,
			});
		}

		return res.status(401).send({
			succes: true,
			code: res.statusCode,
		});
	} catch (e) {
		return res.status(500).send({ success: false, error: e.message });
	}
};

const generateToken = (user) => {
	delete user.password;
	const payload = {
		id: user.id,
	};

	const token = jwt.sign(payload, APP_KEY, {
		expiresIn: 86400,
	});

	return { ...user, token };
};
