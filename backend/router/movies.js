const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const Movies = require("../model/movies.model");

const Storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "public/images")
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname+"-"+Date.now()+path.extname(file.originalname))
    }

})

const upload = multer({storage: Storage})

router.post("/add-movie", upload.single("imageFile"), (req, res)=>{
    const title = req.body.title;
    const review = req.body.review;
    const description = req.body.description;
    const imgfile = req.file.filename;

    const newMovie = new Movies({
        title: title,
        review: review,
        description: description,
        imgPath: imgfile
    })

    newMovie.save()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        res.status(400).json(err);
    })

})

router.get("/", (req, res) => {
    Movies.find()
    .then(data =>{
        res.status(200).json(data);
    })
    .catch(err =>{
        res.status(400).json(err);
    })
})

module.exports = router;
