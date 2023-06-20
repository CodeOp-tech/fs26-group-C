var express = require("express");
var router = express.Router();
const models = require("../models/index");
const fs = require("fs/promises");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const mime = require("mime-types");
const multer = require("multer");
const upload = multer({ dest: "public/images" });


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
      
    } catch (err) {
      res.status(500).send(err);
    }
});
  
//POST edits in database
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
