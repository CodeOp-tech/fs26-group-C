var express = require("express");
var router = express.Router();
const models = require("../models/index");

router.get("/", async function (req, res, next) {
  try {
    const pets = await models.Pet.findAll();
    console.log(pets)
    res.send(pets);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});



/* Post new pet listing. */
router.post("/", async function (req, res, next) {
  const {
    name,
    breed_id,
    age,
    gender,
    neutered,
    user_id,
    vaccination_status,
    chip,
    medical_issues,
    special_needs,
    passport,
    bio,
    personality,
    diet,
  } = req.body;

    try {
    const pets = await models.Pet.create({
      name,
      breed_id,
      age,
      gender,
      neutered,
      user_id,
      vaccination_status,
      chip,
      medical_issues,
      special_needs,
      passport,
      bio,
      personality,
      diet,
    });
      
    res.send(pets);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = router;
