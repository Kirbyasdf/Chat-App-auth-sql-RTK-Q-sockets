'use strict';

const bcrypt = require('bcrypt')


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

    await queryInterface.bulkInsert('Users', [
      {
        firstName:"John",
        lastName:"doe",
        email: 'john@asdf.com',
        password: bcrypt.hashSync('12341234' , 10),
        gender: "male"
      },{
        firstName:"tim",
        lastName:"gasp",
        email: 'tim@asdf.com',
        password:'12341234',
        gender: "male"
      },
      {
        firstName:"sara",
        lastName:"hanker",
        email: 'sara@asdf.com',
        password:'12341234',
        gender: "male"
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
     
  }
};
