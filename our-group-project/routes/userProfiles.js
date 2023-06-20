var express = require("express");
var router = express.Router();
const models = require("../models/index");

/* GET user profile listing by user_id*/
router.get("/:id", async function (req, res, next) {
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
router.post("/edit/:id", async function (req, res, next) {
    const { user_id } = req.params;
    const { bio, reason_to_adopt, reason_to_give, extra_info, occupation } = req.body;
    
    try {
      const user= await models.User_profile.findOne({
        where: {user_id}
      })
      user.create({
          bio, 
          reason_to_adopt,
          reason_to_give,
          extra_info,
          occupation
      })
      res.send("profile has been updated")
    } catch (error) {
      res.status(500).send({message: error.message})
    }
  })
  

  module.exports = router;