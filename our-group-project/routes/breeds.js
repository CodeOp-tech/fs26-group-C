var express = require("express");
var router = express.Router();
const models = require("../models/index");


/* GET breeds */
router.get("/", async function (req, res) {

  try {
    const breeds = await models.Breed.findAll();
    res.send(breeds);
  } catch (error) {
    res.status(500).send(error);
  }
});

 //get breed by ID 
 router.get('/:id', async function (req, res) {
  const { id } = req.params;
  try {
    const breed = await models.Breed.findOne( {
      where: {
        id: id,
      }
    });
    res.send(breed);
  } catch(error) {
    res.status(500).send({ message: error});
  }
 })

 //pets of that breed 
 router.get('/:id/pets', async (req, res) => {
  const { id } = req.params;

  try {
    const breed = await models.Breed.findByPk(id, {
      include: [{ model: models.Pet}],
    });

    if (!breed) {
      return res.status(404).send({error: 'Breed not found'});
    }
    res.send(breed.pets);
  } catch {
    res.status(500).send({ error: "error"})
  }
 })

 module.exports = router;

