var express = require("express");
var router = express.Router();
const models = require("../models/index");

/* GET user profile listing by user_id*/
router.get("/:user_id", async function (req, res, next) {
  const { user_id } = req.params;
  try {
    const profile = await models.User_profile.findOne({
      where: { user_id },
    });
    res.send(profile);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

//POST edits in database
router.post("/edit/:user_id", async function (req, res, next) {
    const { user_id, bio, reason_to_adopt, reason_to_give, extra_info, occupation } = req.body;
    console.log(occupation)
  try {
      const user= await models.User_profile.create({
          user_id,
          bio, 
          reason_to_adopt,
          reason_to_give,
          extra_info,
          occupation
      })
    console.log(user)
      res.send(user)
    } catch (error) {
      res.status(500).send({message: error.message})
    }
  })
  

  module.exports = router;