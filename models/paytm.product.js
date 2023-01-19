const mongoose=require("mongoose");

const productSchema=mongoose.Schema({
    name:String,
    model:String,
    brand:String,
    price:Number,
    userID:String

})

const ProductModel=mongoose.model("car",productSchema);

module.exports={ProductModel}