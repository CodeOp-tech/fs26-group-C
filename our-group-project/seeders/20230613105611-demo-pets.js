'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    let pets = [];

    const bot = 
    {
        name: "bot",
        breed_id: 5,
        user_id: 22,
        age: 4,
        gender: "male",
        neutered: true,
        vaccination_status: true,
        chip: true,
        passport: true,
        bio: " i am not giving him away just advertising his AWESOMENESS",
        personality: "best dog in the world.",
        diet: "anything but his own kibble please."
    }
    
    const fluff = 
    {
        name: "fluff",
        breed_id: 28,
        user_id: 21,
        age: 1,
        gender: "male",
        neutered: false,
        vaccination_status: true,
        chip: false,
        passport: true,
        bio: "not bot but..okay",
        personality: "likes to eat and sleep",
        diet: "only strawberries and champagne."
    }
  
    
    const sugarpuff = {
      name: "sugarpuff",
      breed_id: 12,
      user_id: 25,
      age: 10,
      gender: "female",
      neutered: false,
      vaccination_status: true,
      chip: true,
      passport: false,
      bio: "strong independent pet with sugary barks and many fluffs",
      diet: "gluten-free kibble sprinkled with gold.",

    }

    const avocado = {
      name: "avocado",
      breed_id: 36,
      user_id: 25,
      age: 2,
      gender: "male",
      neutered: false,
      vaccination_status: true,
      chip: false,
      passport: true,
      bio: "from a seed to a wooffy fruit",
      diet: "just NOT avocadoes",

    }


    pets = [bot, fluff, sugarpuff, avocado]

    await queryInterface.bulkInsert("pets", pets, {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pets', null, {});

  }
};
