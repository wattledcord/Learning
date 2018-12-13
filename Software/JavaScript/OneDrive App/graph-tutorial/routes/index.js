var express = require('express');
var router = express.Router();
const path =require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  let params = {
    active: { home: true }
  };

  res.render('index', params);
});
router.get('/public/images/:imagename',(req,res)=>{
  console.log("Got into here",req.params.imagename);
  res.sendFile(path.resolve(__dirname,`../public/images/${req.params.imagename}`));
})

module.exports = router;