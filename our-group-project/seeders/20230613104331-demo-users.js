"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        username: "testerUsername",
        email: "tester@email.com",
        password: "tester",
        name: "testerName",
        surname: "testerSurname",
        date_of_birth: "2023-06-13",
        location: "CodeOp Country",
      },
      {
        username: "loginUsername",
        email: "login@email.com",
        password: "login",
        name: "loginName",
        surname: "loginSurname",
        date_of_birth: "2023-06-13",
        location: "CodeOp Country",
      },
      {
        username: "ihavesomanypets",
        email: "pets@email.com",
        password: "pets",
        name: "Petty",
        surname: "Mc Pettison",
        date_of_birth: "2007-02-23",
        location: "Pettyville",
      },
      {
        username: "adoptthemall",
        email: "adopt@email.com",
        password: "adopt",
        name: "A Dop",
        surname: "T",
        date_of_birth: "2007-02-23",
        location: "woofchesire",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null);
  },
};
