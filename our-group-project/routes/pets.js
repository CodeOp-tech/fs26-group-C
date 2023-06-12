var express = require("express");
var router = express.Router();
const models = require("../models/index");


router.get('/', async function (req,res) {
  try {
   const pets = await models.Pet.findAll();
   res.send(pets);
  } catch (error) {
   res.status(500).send(error);
  }
 
 });




router.get("/:user_id", async function (req, res, next) {
  const { user_id } = req.params;
  try {
    const value = await models.Value.findOne({
      where: {
        id: user_id,
      },
    });
    res.send(value);
  } catch (error) {
    res.status(500).send(error);
  }
});

/* Post new pet listing. */
//posting as null - why?
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
