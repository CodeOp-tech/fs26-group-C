"use strict";

const { Breed } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    // class Weight extends Breed {
    //   static associate(models) {
    //     // define association here
    //     Weight.hasOne(models.Breed,{foreignKey:"breed_id"})
    //   }

    // }
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
    // foreach each breed in breeds
      breeds.forEach( async (breed) => {
        const minweight = Number(breed.weight.split(" - ")[0])
        const maxweight = Number(breed.weight.split(" - ")[1])
        // "set" the minWeight and maxWeight
        breed.set({
          minWeight: minweight,
          maxWeight: maxweight
        });
    
        await breed.save()
      })
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