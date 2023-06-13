"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    let users = [];

    const userTest = {
      username: "testerUsername",
      email: "tester@email.com",
      password: "tester",
      name: "testerName",
      surname: "testerSurname",
      date_of_birth: "2023-06-13",
      location: "CodeOp Country",
    };

    const userLogin = {
      username: "loginUsername",
      email: "login@email.com",
      password: "login",
      name: "loginName",
      surname: "loginSurname",
      date_of_birth: "2023-06-13",
      location: "CodeOp Country",
    };

    const userPets = {
      username : "ihavesomanypets",
          email: "pets@email.com",
          password: "pets",
          name : "Petty",
          surname : "Mc Pettison",
          date_of_birth : "2007-02-23",
          location: "Pettyville"

    }

    const userPetsAdopt = {
      username: "adoptthemall",
      email: "adopt@email.com",
      password: "adopt",
      name: "A Dop",
      surname: "T",
      date_of_birth: "2007-02-23",
      location: "woofchesire",
    };


    users = users.push[userTest, userLogin, userPets, userPetsAdopt]

    await queryInterface.bulkInsert('users', users , {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});

  },
};
