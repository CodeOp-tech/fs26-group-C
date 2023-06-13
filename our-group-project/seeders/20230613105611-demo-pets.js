"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("pets", [
      {
        name: "bot",
        breed_id: 5,
        user_id: 1,
        age: 4,
        gender: "male",
        neutered: true,
        vaccination_status: true,
        chip: true,
        passport: true,
        bio: "i am not giving him away just advertising his AWESOMENESS",
        diet: "anything but his own kibble please.",
      },
      {
        name: "fluff",
        breed_id: 28,
        user_id: 2,
        age: 1,
        gender: "male",
        neutered: false,
        vaccination_status: true,
        chip: false,
        passport: true,
        bio: "not bot but..okay",
        diet: "only strawberries and champagne.",
      },
      {
        name: "sugarpuff",
        breed_id: 12,
        user_id: 3,
        age: 10,
        gender: "female",
        neutered: false,
        vaccination_status: true,
        chip: true,
        passport: false,
        bio: "strong independent pet with sugary barks and many fluffs",
        diet: "gluten-free kibble sprinkled with gold.",
      },
      {
        name: "avocado",
        breed_id: 36,
        user_id: 4,
        age: 2,
        gender: "male",
        neutered: false,
        vaccination_status: true,
        chip: false,
        passport: true,
        bio: "from a seed to a wooffy fruit",
        diet: "just NOT avocadoes",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("pets", null);
  },
};
