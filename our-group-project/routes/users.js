var express = require("express");
var router = express.Router();
const models = require("../models/index");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  try {
    const users = await models.User.findAll();
    res.send(users);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

/* GET users listing by id*/
router.get("/:id", async function (req, res, next) {
  const { id } = req.params;
  try {
    const user = await models.User.findOne({
      where: { id },
    });
    res.send(user);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

/* GET users listing by id with their pets*/
router.get("/:id", async function (req, res, next) {
  const { id } = req.params;
  try {
    const user = await models.User.findOne({
      where: { id },
      include: models.Pet,
    });

    res.send(user);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

/* Post new user listing. */
router.post("/", async function (req, res, next) {
  const { username, email, password, name, surname, date_of_birth, location } =
    req.body;

    try {
    const users = await models.User.create({
      username,
      email,
      password,
      name,
      surname,
      date_of_birth,
      location,
    });
      
    res.send(users);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = router;
