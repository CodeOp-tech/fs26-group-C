"use strict";
const models = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    // DATA FROM API
    const { data } = await axios.get(
      "https://api.thedogapi.com/v1/breeds?/&api_key=live_Gn9vHzYy4ihx41hkxTZfLlm1w6FnHL3msR1dv60JmEKGx9fZuqTCZh5A78WZDcFp"
    );

    // DATA FROM DB
    const breeds = await models.Breed.findAll();

    // const example = {
    //   weight: { imperial: "6 - 13", metric: "3 - 6" },
    //   height: { imperial: "9 - 11.5", metric: "23 - 29" },
    //   id: 1,
    //   name: "Affenpinscher",
    //   bred_for: "Small rodent hunting, lapdog",
    //   breed_group: "Toy",
    //   life_span: "10 - 12 years",
    //   temperament:
    //     "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
    //   origin: "Germany, France",
    //   reference_image_id: "BJa4kxc4X",
    //   image: {
    //     id: "BJa4kxc4X",
    //     width: 1600,
    //     height: 1199,
    //     url: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
    //   },
    // };

    const breedsObject = {};

    breeds.forEach((b) => {
      breedsObject[b.breed] = b.id;
    });

    /*

    breedsObject = {
      "Affenpinscher": 1,
      "Afghan Hound": 2,
      "African Hunting Dog": 3,
      ...
    }
    */

    const breedData = data.map((d) => ({
      life_span: d.life_span,
      breedId: breedsObject[d.name],
      // breedId: breeds.find((b) => b.breed === d.name).id,
    }));

    await queryInterface.bulkInsert("breedsCards", breedData, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
