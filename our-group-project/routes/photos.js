var express = require("express");
var router = express.Router();
const models = require("../models/index");
const fs = require("fs/promises");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const mime = require("mime-types");
const multer = require("multer");
const upload = multer({ dest: "public/images" });

router.get("/:pet_id", async function (req, res, next) {
  const { pet_id } = req.params;
  try {
    const images = models.Photo.findAll({
      where: {external_id: pet_id}
    });
    res.send(images)
  } catch (error) {
    res.status(500).send({message: error.message})
  } 
})

router.get("/user/:user_id", async function (req, res, next) {
  const { user_id } = req.params;
  try {
    const images = models.Photo.findAll({
      where: {external_id: user_id}
    })
    res.send(images)
  } catch (error) {
    res.status(500).send({message:error.message})
  }
})

router.post("/:type/:id/upload", upload.single("imagefile"), async (req, res) => {
    const imagefile = req.file;
  
    console.log("imagefile",imagefile);
  
    // check the extension of the file
    const extension = mime.extension(imagefile.mimetype);
    console.log("extension",extension);

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
      
        await models.Photo.create({
            
        })
        
        
        
    } catch (err) {
      res.status(500).send(err);
    }
  });
  

module.exports = router;
