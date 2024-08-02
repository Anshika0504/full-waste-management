const express=require('express');

const mongoose=require('mongoose');
require("./config/db");
const cors=require('cors');
const dotenv=require('dotenv');
const schedule=require('./models/schedule');



const app=express();
app.use(express.json());
app.use(cors());
app.post("/createsch",async (req,resp)=>{
    try{
        const schData=new schedule(req.body);
        if(!schData){
            return resp.status(404).json({msg:"schedule data no found"});
        }
        const saveData=await schData.save();
        resp.status(200).json(saveData);
        console.log("data created")
    }
    catch{
        resp.status(500).json({error:error});
    }
})
app.get("/getAllsch",async(req,resp)=>{
    try{
        const schData=await schedule.find();
        if(!schData){
            return resp.status(404).json({msg:"schedule not found"});
        }
        resp.status(200).json(schData);
    }
    catch(erro){
        resp.status(500).json({error:"some error is there"});
    }

})
app.get("/getonesch/:id", async (req, resp) => {
    try {
        const id = req.params.id;
        const schExist = await schedule.findById(id);
        if (!schExist) {
            return resp.status(404).json({ msg: "schedule not found" });
        }
        resp.status(200).json(schExist);
    } catch (error) {
        resp.status(500).json({ error: "some error has been occurred" });
    }
});
app.put("/updatesch/:id", async (req, resp) => {
    try {
        const id = req.params.id;
        const schExist = await schedule.findById(id);
        if (!schExist) {
            return resp.status(400).json({ msg: "schedule not found" });
        }
        const updatedData = await schedule.findByIdAndUpdate(id, req.body, { new: true });
        resp.status(200).json(updatedData);
    } catch (error) {
        resp.status(500).json({ error: "some unexpected error has occurred" });
    }
});
app.get("/search/:key",async(req,resp)=>{
    let result=await schedule.find({
        "$or":[
            {HouseNo:{$regex:req.params.key}},
            {WorkerName:{$regex:req.params.key}},
            {WorkerId:{$regex:req.params.key}},
            {Timings:{$regex:req.params.key}},
            
        ]
    });
    resp.send(result)
})
app.delete("/deletesch/:id",async(req,resp)=>{
    try{
        const id=req.params.id;
        const schExist=await schedule.findById(id);
        if(!schExist){
            return resp.status(400).json({msg:"Schedule does not found"});
        }
        await schedule.findByIdAndDelete(id);
        resp.status(200).json({msg:"schedule has been deleted successfully"});
    }
    catch(error){
        resp.status(404).json({error:"some unexpected error has been occured"})
    }
})


app.listen(4000);
