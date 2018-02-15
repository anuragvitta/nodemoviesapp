let connectdb=require("../config/config.js").connectdb;
let express = require('express');
let bodyParser =require("body-parser");
let movies=require("../services/movieservice.js").movies;
let addmovie=require("../services/movieservice.js").addmovie;
let updatemovie=require("../services/movieservice.js").updatemovie;
let readmovie=require("../services/movieservice.js").readmovie;
let app= express();
 app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
    var router=express.Router();
   /* var validate=function(req, res, next) {
    let usname=req.body.name;
    if(usname.length<5|!usname)
    {
        next(err);
    }
    next();
    };*/
    router.post("/addmovie",async function (req, res) {
        let params=req.body;
        //console.log(params);
        try{
        let result=await addmovie(params);
        res.send(result);
    }
     catch(err)
    {
        res.send(err);
    }
   });
      router.get("/getmovies",async function (req, res) {
        try{
        let result=await movies();
        res.send(result);
    }
     catch(err)
    {
        res.send(err);
    }
});
       router.put("/updatemovie",async function (req, res) {
        try{
            let params=req.body;
            console.log(params);
        let result=await updatemovie(params);
        res.send(result);
    }
     catch(err)
    {
        res.send(err);
    }
});
router.post("/getmovie",async function (req, res) {
        try{
            let params=req.body;
            //console.log(params);
        let result=await readmovie(params);
        //console.log(result);
        res.send(result);
    }
     catch(err)
    {
        res.send(err);
    }
});
module.exports=router;


