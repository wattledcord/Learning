const router=require('express').Router();

router.get('/login',(req,res)=>{
    res.render('login');
})

router.get('/logout',(req,res)=>{
    res.send("Logging Out");
})

router.get('/google',(req,res)=>{
    res.send("Logging With Google");
})

module.exports=router;