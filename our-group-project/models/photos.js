"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Photo.belongsTo(models.Pet, {
        foreignKey: "external_id",
        constraints: false,
      });

      Photo.belongsTo(models.UserProfile, {
        foreignKey: "external_id",
        constraints: false,
      });
    }

    getCommentable(options) {
      if (!this.type) return Promise.resolve(null);
      const mixinMethodName = `get${uppercaseFirst(this.type)}`;
      return this[mixinMethodName](options);
    }
  }
  Photo.init(
    {
      filename: DataTypes.STRING,
      external_id: DataTypes.INTEGER,
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Photo",
    }
  );

  return Photo;
};
