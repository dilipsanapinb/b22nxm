const express=require("express");
require('dotenv').config();
const {connection}=require("./config/db")
const {carRouter}=require("./routes/car.route");
const {UserModel, userRouter}=require("./routes/user.route");
const {authenticate}=require("./middlewares/authenticate.middleware");
const cors = require('cors')
const app=express();

//middlewares
app.use(express.json())
app.use(cors({
    origin:"*"
}))
//routes
app.use('/user',userRouter)
app.use(authenticate)
app.use("/car",carRouter);



app.get("/",(req,res)=>{
    res.send("Welcome to Home Page")
})

//port
app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log("Connected to DB");
    } catch (error) {
        console.log({"err":"not able to cooct the database"});
    }
    console.log(`server is running on port:${process.env.port}`);
})