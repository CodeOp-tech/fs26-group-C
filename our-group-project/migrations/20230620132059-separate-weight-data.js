"use strict";

const { Breed } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    // create the new columns
    await queryInterface.addColumn("breeds", { minWeight: Sequelize.INTEGER });
    await queryInterface.addColumn("breeds", { maxWeight: Sequelize.INTEGER });

    // populate the new columns with the data from the old weight column
    const breeds = await Breed.findAll();
    // generate a new array of breeds, in which the minWeidht and maxWeight are set
    // https://sequelize.org/docs/v6/core-concepts/model-instances/#updating-an-instance
    // foreach each breed in breeds
    // breed.weight.split(" - ") => ["71", "86"]
    // "set" the minWeight and maxWeight
    // breed.save()
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
