var express = require('express');
var router = express.Router();
const models = require("../models");

router.get('/', async function (req,res) {
  try {
   const breeds = await models.Breed.findAll();
   res.send(breeds);
  } catch (error) {
   res.status(500).send(error);
  }
 
 });