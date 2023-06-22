'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('questions', [
      { question: 'House Type', createdAt: new Date(), updatedAt: new Date() },
      { question: 'Child Friendliness', createdAt: new Date(), updatedAt: new Date() },
      

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('questions', null, {});
  }
};
