"use strict";
const bcrypt = require("bcrypt");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	User.init(
		{
			username: DataTypes.STRING,
			password: DataTypes.STRING,
			avatar: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "User",
			hooks: {
				beforeCreate: hashPassword,
				beforeUpdate: hashPassword,
			},
			defaultScope: {
				attributes: { exclude: ["password"] },
			},
			scopes: {
				withPassword: {
					attributes: {},
				},
			},
		}
	);
	return User;
};

const hashPassword = async (user) => {
	if (user.changed("password")) {
		user.password = await bcrypt.hash(user.password, 10);
	}

	return user;
};
