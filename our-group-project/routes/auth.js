var express = require("express");
var router = express.Router();
const models = require("../models/index");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");
const saltRounds = 10;
require("dotenv").config();
const supersecret = process.env.SUPER_SECRET;
const userMustBeLoggedIn = require('../guards/userMustBeLoggedIn')

 

//REGISTRATION
router.post("/register", async function (req, res, next) {
  let { username, email, password, name, surname, date_of_birth, location } =
    req.body;
  console.log(req.body);
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
    const user = await models.User.create({
      username,
      email,
      password,
      name,
      surname,
      date_of_birth,
      location,
    });
    console.log(user);
    res.send("Registered successfully");
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

//LOGIN
router.post("/login", async function (req, res, next) {
  const { username, password } = req.body;
  console.log(username)
  try {
    const user = await models.User.findOne({
      where: { username },
    });

    if (user) {
      const user_id = user.id;
      const correctPass = await bcrypt.compare(password, user.password);
      if (!correctPass) throw new Error("Incorrect Password");
      //generating token if username + password is correct
      // useriD is the payload - the middle part - whatever we want to inject in there basically
      var token = jwt.sign({ user_id }, supersecret);
      //var token = jwt.sign({ userID }, supersecret, {expiresIn: 60*60*24*31});
      res.send({ message: `Login successful, get your token`, token });
    } else {
      throw new Error("user does not exist");
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

//ACCESSING PRIVATE INFO
router.get("/profile", userMustBeLoggedIn, async function (req, res, next) {
 //filter through data to get the ones where user_id matches
  const user_id = req.user_id
  const userData = await models.User.findOne({
    where: { id: user_id }, 
    }) 
  const userPetData = await models.Pet.findAll({
    where: {user_id}
  })
  const userProfileData = await models.User_profile.findOne({
    where: {user_id}
  })
  
  res.send({
    
    userData, userPetData, userProfileData
    //return private data

  })
  
})

module.exports = router;
