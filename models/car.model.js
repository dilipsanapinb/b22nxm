const mongoose=require("mongoose");

const carSchema=mongoose.Schema({
    name:String,
    model:String,
    brand:String,
    price:Number,
    userID:String

})

const CarModel=mongoose.model("car",carSchema);

module.exports={CarModel}