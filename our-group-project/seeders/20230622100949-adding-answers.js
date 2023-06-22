'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const currentTimestamp = new Date();
    await queryInterface.bulkInsert('answers', [
      {
        answer: 'Apartment',
        question_id: 1,
        createdAt: currentTimestamp,
        updatedAt: currentTimestamp,
      },
      {
        answer: 'House with a backyard',
        question_id: 1,
        createdAt: currentTimestamp,
        updatedAt: currentTimestamp,
      },
      {
        answer: 'Not important, there are no children in the household',
        question_id: 2,
        createdAt: currentTimestamp,
        updatedAt: currentTimestamp,
      },
      {
        answer: 'Very important, we have children or frequently have children visiting',
        question_id: 2,
        createdAt: currentTimestamp,
        updatedAt: currentTimestamp,
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('answers', null, {});
  }
};
