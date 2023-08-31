const express= require("express");
const cors = require("cors");
const mongoose=require("mongoose");
const bodyParser  = require("body-parser");
const MovieRouter = require("./router/movies");

const app= express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static("public"));

require("dotenv").config();
const url = process.env.ATLAS_URL;

app.use("/movies", MovieRouter);

mongoose.connect(url)
.then(()=>{
    app.listen(8000); 
    console.log("Mongoose connected Successfully !!!")
})
.catch((err) =>{
    console.log(err)
})