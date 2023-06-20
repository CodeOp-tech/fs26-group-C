var express = require("express");
var router = express.Router();
const models = require("../models/index");
const { Op } = require("sequelize");
const petMustExist = require("../guards/petMustExist")

/* GET all pets. */
router.get("/", async function (req, res) {
  try {
    const pets = await models.Pet.findAll({
      include: [{ model: models.Breed }],
    });
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
      include: [{ model: models.Breed }],
      where: {
        user_id,
      },
    });

    res.send(pets);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

/* GET pet by id. */
router.get("/:id", async function (req, res, next) {
  const { id } = req.params;
  try {
    const pet = await models.Pet.findOne({
      include: [
        { model: models.Breed },
        { model: models.User },
      ],
      where: {
        id,
      },
    });
    res.send(pet);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

/* GET pets by location or breed . */

router.get(`/search`, async function (req, res, next) {
  const queryParams = req.query;
  const conditions = {};

  if (queryParams.latitude && queryParams.longitude) {
    conditions.latitude = {
      [Op.between]: [queryParams.latitude - 0.1, queryParams.latitude + 0.1],
    };
    conditions.longitude = {
      [Op.between]: [queryParams.longitude - 0.1, queryParams.longitude + 0.1],
    };
  }

  if (queryParams.id) {
    conditions.breed_id = {
      [Op.eq]: queryParams.id,
    };
  }

  try {
    const pets = await models.Pet.findAll({
      include: [{ model: models.Breed }],
      where: conditions,
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
    diet,
    location,
    latitude,
    longitude,
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
      diet,
      location,
      latitude,
      longitude,
    });

    res.send(pets);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }

});


/*DELETE pet listing */
router.delete("/:id", petMustExist, async function (req, res, next) {
  const { id } = req.params;
  try {
    const pet = models.Pet.destroy({
      where: {id}
    })
    res.send({message: "Your pet has been deleted successfully"})
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
})


module.exports = router;
