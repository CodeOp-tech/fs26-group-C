var express = require("express");
var router = express.Router();
const models = require("../models/index");
const fs = require("fs/promises");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const mime = require("mime-types");
const multer = require("multer");
const upload = multer({ dest: "public/images" });
const userMustBeLoggedIn = require("../guards/userMustBeLoggedIn");
const userMustExist = require("../guards/userMustExist")

/* GET all users */
router.get("/", async function (req, res, next) {
  try {
    const users = await models.User.findAll();
    res.send(users);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

/* GET user listing by id*/
router.get("/:id", userMustExist, async function (req, res, next) {
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

/* GET users' avatar by id*/
router.get("/user/:id/avatar",userMustExist, async function (req, res, next) {
  const { id } = req.params;
  try {
    const user = await models.User.findOne({
      where: { id },
    });
    res.send(user.avatar);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

//THIS COULD BE ADDED TO GET USERS BY ID
/* GET users listing by id with their pets*/
router.get("/pets/:id",userMustExist, async function (req, res, next) {
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

//THIS COULD BE ADDED TO GET USERS BY ID
//GET favourites per user
router.get(
  "/favourites/:user_id",
  userMustBeLoggedIn,
  async function (req, res, next) {
    const { user_id } = req.params;
    try {
      const userAll = await models.User.findAll({
        where: { id: user_id },
        include: [
          {
            model: models.Pet,
          },
        ],
      });
      res.send(userAll);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }
);

//needs userMustBeLoggedIn
//POST to upload avatar
router.post(
  "/profile/:id/upload", 
  upload.single("imagefile"),
  async (req, res) => {
    const { id } = req.params;
    const imagefile = req.file;
    // check the extension of the file
    const extension = mime.extension(imagefile.mimetype);
    // create a new random name for the file
    const filename = uuidv4() + "." + extension;
    // grab the filepath for the temporary file
    const tmp_path = imagefile.path;
    // construct the new path for the final file
    const target_path = path.join(__dirname, "../public/images/") + filename;
    try {
      // move the file from tmp folder to the public folder
      await fs.rename(tmp_path, target_path);
      // store image in the DB
      const user = await models.User.findOne({
        where: { id },
      });
      user.update({
        avatar: filename,
      });
      res.send(user.avatar);
    } catch (err) {
      res.status(500).send(err);
    }
  }
);

//needs userMustBeLoggedIn
//POST profile in database
// router.post("/edit/:id", async function (req, res, next) {
//   const { id } = req.params;
//   const { name, username, email, surname, location } = req.body;
//   try {
//     const user = await models.User.findOne({
//       where: { id },
//     });
//     user.update({
//       name: name,
//     });
//     res.send("added!");
//   } catch (error) {
//     res.status(500).send({ message: error.message });
//   }
// });

//needs userMustBeLoggedIn
//Changing adopter value
router.post("/adoption/:id", async function (req, res, next) {
  const { adopter } = req.body;
  const { id } = req.params;
  try {
    const user = await models.User.findOne({
      where: { id },
    });
    user.update({
      adopter: adopter,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

//POST favourites
router.post("/favourites", userMustBeLoggedIn, async function (req, res, next) {
  const { pet_id } = req.body;
  const { user_id } = req.body;
  console.log(pet_id, user_id);
  try {
    const user = await models.User.findOne({
      where: { id: user_id },
    });
    const pet = await models.Pet.findOne({
      where: { id: pet_id },
    });
    const favourites = await models.Favourite.create({
      user_id,
      pet_id,
    });
    res.send(favourites);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

//needs userMustBeLoggedIn
// DELETE A FAVORITE
router.delete("/favourites", async function (req, res, next) {
  const pet_id = req.query.pet_id;
  const user_id = req.query.user_id;
  console.log(pet_id, user_id);
  try {
    const deletedFavorite = await models.Favourite.destroy({
      where: {
        pet_id: pet_id,
        user_id: user_id,
      },
    });

    if (deletedFavorite) {
      res.send({ message: "Favorite removed successfully" });
    } else {
      res.status(404).send({ message: "Favorite not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = router;
