const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://rohithsj:Rohith@cluster0.eteshvv.mongodb.net/newdb?retryWrites=true&w=majority")
.then(()=>{console.log("atlas db connected")});

const exSchema=new mongoose.Schema({
    amount:Number,
    desc:String,
    title:String,
});

const Expense=mongoose.model("Expense",exSchema);
module.exports=Expense;