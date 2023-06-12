'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class breed_cards extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  breed_cards.init({
    breed_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'breed_cards',
  });
  return breed_cards;
};