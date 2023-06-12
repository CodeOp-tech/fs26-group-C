var express = require("express");
var router = express.Router();
const models = require("../models/index");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");
const saltRounds = 10;
require("dotenv").config();
const supersecret = process.env.SUPER_SECRET;

//REGISTRATION
router.post("/register", async function (req, res, next) {
    let { username, email, password, name, surname, date_of_birth, location } = req.body;
    console.log(req.body)
  try {
    let hash = await bcrypt.hash(password, saltRounds);
    // await models.User.findOne({
    //   where: {
    //     username: username,
    //     email: email,
    //     hash,
    //     name: name,
    //     surname: surname,
    //     date_of_birth,
    //     location,
    //   },
    // });
      password = hash;
      const user = await models.User.create({ username, email, password, name, surname, date_of_birth, location });
      console.log(user)
    res.send("Registered successfully");
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

//LOGIN
router.post("/login", async function (req, res, next) {
  const { userN, password } = req.body;
  try {
    const results = await models.User.findOne({
      where: { username: `${userN}` },
    });
    const user = results.data[0];
    if (user) {
      const userID = user.id;
      const correctPass = await bcrypt.compare(password, user.password);
      if (!correctPass) throw new Error("Incorrect Password");
      var token = jwt.sign({ userID }, supersecret);
      res.send({ message: `Login successful, get your token`, token });
    } else {
      throw new Error("user does not exist");
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

//ACCESSING PRIVATE INFO

module.exports = router;
