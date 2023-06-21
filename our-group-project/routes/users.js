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



//TO upload avatar
router.post("/profile/:id/upload", upload.single("imagefile"), async (req, res) => {
  const { id } = req.params;   
  const imagefile = req.file;  
  console.log(req.file)
    // check the extension of the file
    const extension = mime.extension(imagefile.mimetype);
    // create a new random name for the file
    const filename = uuidv4() + "." + extension;
    // grab the filepath for the temporary file
    const tmp_path = imagefile.path;
    // construct the new path for the final file
    const target_path = path.join(__dirname, "../public/images/") + filename;
    console.log({ filename, tmp_path, target_path });
  
    try {
      // move the file from tmp folder to the public folder
      await fs.rename(tmp_path, target_path);
  
      // store image in the DB
      
        const user = await models.User.findOne({
            where: {id}
        })
  
      user.update({
        avatar: filename
      })
      
      res.send(user.avatar)
    } catch (err) {
      res.status(500).send(err);
    }
});
  
//POST profile edits in database
router.post("/edit/:id", async function (req, res, next) {
  const { id } = req.params;
  const { name, username, email, surname, location } = req.body;
  try {
    const user= await models.User.findOne({
      where: {id}
    })
    user.update({
      name: name  
    })
    res.send("updated!")
  } catch (error) {
    res.status(500).send({message: error.message})
  }
})


router.get("/favourites/:user_id", async function (req, res, next) {
  const { user_id } = req.params;
  console.log(user_id)
  try {
    const favourites = await models.Favourite.findAll({
      where: {
        user_id
      }
    });
    console.log(favourites)
    const faves = favourites.map((e) => (
      models.Pet.findOne({
        where: {
          id: e.id
        }
      })
    ))
    res.send(faves)
  } catch (error) {
    res.status(500).send({message: error.message})
  }
})

router.post("/favourites", async function (req, res, next) {
  const { pet_id } = req.body;
  const { user_id } = req.body;
  console.log(pet_id, user_id)
   try {
     const user = await models.User.findOne({
      where: { id: user_id}
     })

     const pet = await models.Pet.findOne({
      where: {id : pet_id}
     })
     
     const favourites = await models.Favourite.create({
       user_id,
       pet_id,
     })

     res.send(favourites)

  } catch (error) {
    res.status(500).send({message:error.message})
  }
})

router.post("/adoption/:id", async function (req, res, next) {
  const { adopter } = req.body;
  const { id } = req.params
  try {
    const user = await models.User.findOne({
      where: {id}
    })
    user.update({
      adopter: adopter
    })
  } catch (error) {
    res.status(500).send({message: error.message})
  }
})

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

/* GET users' avatar by id*/
router.get("/user/:id/avatar", async function (req, res, next) {
  const { id } = req.params;
  try {
    const user = await models.User.findOne({
      where: {id}
    })

    res.send(user.avatar)
  } catch (error) {
    res.status(500).send({message: error.message})
  }
}) 



/* GET users listing by id with their pets*/
router.get("/pets/:id", async function (req, res, next) {
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


module.exports = router;
