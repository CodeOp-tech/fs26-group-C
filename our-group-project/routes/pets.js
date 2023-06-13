var express = require("express");
var router = express.Router();
const models = require("../models/index");

/* GET all pets. */
router.get("/", async function (req, res) {
  try {
    const pets = await models.Pet.findAll({
      include: [{ model: models.Breed }]
    }
    );
    res.send(pets);
  } catch (error) {
    res.status(500).send(error);
  }
});

/* GET pets by user_id. */
router.get("/user/:user_id", async function (req, res, next) {
  const { user_id } = req.params;
  try {
    const pets = await models.Pet.findAll({
      where: {
        user_id
      }
    });

    res.send(pets);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

/* Post new pet listing. */
// true = 1 , false = 0 for boolean values
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
