const mongoose=require('mongoose');
const scheduleSchema=new mongoose.Schema({
    HouseNo:{
        type:String,
        require:true,
    },
    Date:{
        type:Date,
        require:true
    },
    WorkerName:{
      type:String,
      require:true
    },
    WorkerId:{
        type:String,
        require:true
    },
    Timings:{
        type:String,
        require:true
    },
   

})
module.exports=mongoose.model("schedule",scheduleSchema);