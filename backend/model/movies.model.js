const mongoose = require("mongoose");

const schema = mongoose.Schema;
const movieSchema = new schema({
    title:{
        type:String,
        required:true
    },
    review:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    imgPath:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Movies", movieSchema)
