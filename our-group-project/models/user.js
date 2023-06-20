"use strict";

const { Model } = require("sequelize");
const fs = require("fs");
const path = require("path");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Pet, { foreignKey: "user_id" });
      User.hasOne(models.User_profile, { foreignKey: "user_id" });
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      name: DataTypes.STRING,
      surname: DataTypes.STRING,
      date_of_birth: DataTypes.DATE,
      location: DataTypes.STRING,
      adopter: DataTypes.BOOLEAN,
      avatar: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
      hooks: {
        afterUpdate: (user, options) => {
          console.log({ user, options });
          // remove the file pointed by user.avatar
          // if a new file is uploaded, it will be saved with the same name
          // if (user.avatar && user.changed("avatar")) {
          //   const filePath = path.join(
          //     __dirname,
          //     "..",
          //     "public",
          //     "images",
          //     user.avatar
          //   );
          //   fs.unlinkSync(filePath);
          // }
        },
      },
    }
  );
  return User;
};
