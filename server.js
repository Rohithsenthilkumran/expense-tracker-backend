const express=require('express')
const Expense=require('./db')
const mongoose=require('mongoose')
// mongoose.connect('mongodb://localhost:27017/expense-tracker')
// .then(()=>{console.log("db connected")})



const app=express();
app.use(express.json())
app.get('/',async(req,res)=>{
    try{
   const ex=await Expense.find({})
    res.send(ex);
    }catch(err){
        res.send(err);
    }
})

const port = process.env.PORT || 8000
app.post('/post',async(req,res)=>{
    try{
    const ex=req.body;
    await Expense.create(ex);
    res.send("posted")
    }catch(err){
        res.send(err);
    }
 })



// app.get('/api/:id',async(req,res)=>{
//     try{
//     const id=req.params.id;
//     const result=await Expense.findById(id);
//     if(result){
//         res.send(result);
//     }
//     else{
//         res.send("no data");
//     }
// }

app.delete('/api/:id',async(req,res)=>{
    try{
    const id=req.params.id;
  
    const result=await Expense.findByIdAndDelete(id);
    if(result){
        res.send("deleted");
    }
    else{
        res.send("no data");
    }
}
catch(err){
    res.send(err);
}
 })


 app.put('/api/:id',async(req,res)=>{
    try{
    const id=req.params.id;
    const obj=req.body;
    const result=await Expense.findByIdAndUpdate(id,{$set:obj},{new:true});
    if(result){
        res.send("update");
    }
    else{
        res.send("no data");
    }
}
catch(err){
    res.send(err);
}
 })

app.get('/home',(req,res)=>{
    res.send("Home");
})
app.listen(port,()=>{
    console.log(`server running on ${port}`);
})
