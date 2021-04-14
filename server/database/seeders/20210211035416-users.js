"use strict";

const bcrypt = require("bcrypt");

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */

		await queryInterface.bulkInsert("Users", [
			{
				username: "john",
				password: bcrypt.hashSync("12341234", 10),
			},
			{
				username: "david",
				password: "12341234",
			},
			{
				username: "Beyonce",
				password: "12341234",
			},
		]);
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		await queryInterface.bulkDelete("Users", null, {});
	},
};
