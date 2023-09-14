'use strict';
const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'nick.buscemi13@gmail.com',
        username: 'nbuscem1',
        hashedPassword: bcrypt.hashSync('samplepassword1')
      },
      {
        email: 'claudia.modica28@gmail.com',
        username: 'cmodic1',
        hashedPassword: bcrypt.hashSync('samplepassword2')
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['nbuscem1', 'cmodic1'] }
    }, {});
  }
};
