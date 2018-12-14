const express=require('express');
const app=express();
const authRouter=require('./routes/auth.routes');

app.set('view engine', 'hbs');

app.use('/auth',authRouter);
app.get('/',(req,res)=>{
    res.render('index');
})


app.listen(10010,()=>{
    console.log("App lisining on 10010 Port");
})