const express=require("express");
const {CarModel}=require("../models/car.model")

const carRouter=express.Router();
carRouter.use(express.json())

//GET Cars
carRouter.get("/",async(req,res)=>{
    try {
        const cars=await CarModel.find();
        res.send(cars)
        console.log("AllCars")
    } catch (error) {
        res.send("err:not able to get the data of all cars");
        console.log(error);
    }
})

//POST Cars
carRouter.post("/add",async(req,res)=>{
    const payload=req.body;
    try {
        const newcars=new CarModel(payload);
        await newcars.save();
        res.send("new car added to Database")
        console.log(newcars)
    } catch (error) {
        res.send("err:not able to post the data of car");
        console.log(error);
    }
})

//PATCH car

carRouter.patch("/update/:id",async(req,res)=>{
    let id=req.params.id
    const payload=req.body;
    try {
        await CarModel.findByIdAndUpdate({_id:id},payload);
        res.send("new car updated to Database")
    } catch (error) {
        res.send("err:not able to update the data of car");
        console.log(error);
    }
})

//delete car

carRouter.delete("/delete/:id",async(req,res)=>{
    let id=req.params.id
    try {
        await CarModel.findByIdAndDelete({_id:id});
        res.send(" car deleted from Database")
    } catch (error) {
        res.send("err:not able to delete the data of car");
        console.log(error);
    }
})

module.exports={carRouter}

