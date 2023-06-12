"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pet.belongsTo(models.User, { foreignKey: "user_id"})

      Pet.hasMany(models.Photo, {
        foreignKey: "external_id",
        constraints: false,
        scope: {
          type: "pet",
        },
      });
    }
  }
  Pet.init(
    {
      name: DataTypes.STRING,
      breed_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      age: DataTypes.INTEGER,
      gender: DataTypes.STRING,
      neutered: DataTypes.BOOLEAN,
      vaccination_status: DataTypes.BOOLEAN,
      chip: DataTypes.BOOLEAN,
      medical_issues: DataTypes.STRING,
      special_needs: DataTypes.STRING,
      passport: DataTypes.BOOLEAN,
      bio: DataTypes.STRING,
      diet: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Pet",
    }
  );
  return Pet;
};
