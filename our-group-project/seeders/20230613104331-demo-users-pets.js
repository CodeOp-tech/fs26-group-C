"use strict";
var bcrypt = require("bcrypt");
const saltRounds = 10;


const makePassword = (pw) => {
  return new Promise(async rs => {
    let hash;
    hash = await bcrypt.hash(pw, saltRounds);
    return rs(hash);
  })
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {



    const seededUsers = [
      {
        username: "testerUsername",
        email: "tester@email.com",
        password: await makePassword("tester"),
        name: "testerName",
        surname: "testerSurname",
        date_of_birth: "2023-06-13",
        location: "CodeOp Country",
      },
      {
        username: "loginUsername",
        email: "login@email.com",
        password: await makePassword("loginPassword"),
        name: "loginName",
        surname: "loginSurname",
        date_of_birth: "2023-06-13",
        location: "CodeOp Country",
      },
      {
        username: "ihavesomanypets",
        email: "pets@email.com",
        password: await makePassword("pets"),
        name: "Petty",
        surname: "Mc Pettison",
        date_of_birth: "2007-02-23",
        location: "Pettyville",
      },
      {
        username: "adoptthemall",
        email: "adopt@email.com",
        password: await makePassword("adopt"),
        name: "A Dop",
        surname: "T",
        date_of_birth: "2007-02-23",
        location: "woofchesire",
      },
    ]
    

    await queryInterface.bulkInsert("users", seededUsers);


    const users = await queryInterface.sequelize.query(
      `SELECT id from USERS;`
    );

    const userRows = users[0];

    const breeds = await queryInterface.sequelize.query(
      `SELECT id from BREEDS;`
    );

    const breedRows = breeds[0];

    return await queryInterface.bulkInsert("pets", [
      {
        name: "bot",
        breed_id: breedRows[0].id,
        user_id: userRows[0].id,
        age: 4,
        gender: "male",
        neutered: true,
        vaccination_status: true,
        chip: true,
        passport: true,
        bio: "i am not giving him away just advertising his AWESOMENESS",
        diet: "anything but his own kibble please.",
        location: "London, UK",
        latitude: 51.5072178,
        longitude: -0.1275862,
      },
      {
        name: "fluff",
        breed_id: breedRows[0].id,
        user_id: userRows[0].id,
        age: 1,
        gender: "male",
        neutered: false,
        vaccination_status: true,
        chip: false,
        passport: true,
        bio: "not bot but..okay",
        diet: "only strawberries and champagne.",
        location: "London, UK",
        latitude: 51.5072178,
        longitude: -0.1275862,
      },
      {
        name: "sugarpuff",
        breed_id: breedRows[0].id,
        user_id: userRows[0].id,
        age: 10,
        gender: "female",
        neutered: false,
        vaccination_status: true,
        chip: true,
        passport: false,
        bio: "strong independent pet with sugary barks and many fluffs",
        diet: "gluten-free kibble sprinkled with gold.",
        location: "London, UK",
        latitude: 51.5072178,
        longitude: -0.1275862,
      },
      {
        name: "avocado",
        breed_id: breedRows[0].id,
        user_id: userRows[0].id,
        age: 2,
        gender: "male",
        neutered: false,
        vaccination_status: true,
        chip: false,
        passport: true,
        bio: "from a seed to a wooffy fruit",
        diet: "just NOT avocadoes",
        location: "London, UK",
        latitude: 51.5072178,
        longitude: -0.1275862,
      },
    ]);
  },


  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null);
    await queryInterface.bulkDelete("pets", null);
  },
};
