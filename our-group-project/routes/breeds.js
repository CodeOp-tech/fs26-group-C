var express = require('express');
var router = express.Router();
const models = require("../models");

router.get('/', async function (req, res) {
  console.log("hi")
  try {
    const breeds = await models.Breed.findAll();
    console.log(breeds)
   res.send(breeds);
  } catch (error) {
   res.status(500).send(error);
  }
 
 });

 module.exports = router;