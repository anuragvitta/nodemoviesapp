let express = require('express');
require('dotenv').config();
let bodyParser =require("body-parser");
let MongoClient = require('mongodb').MongoClient;
let app = express();
  app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
var routes=require("./src/routes/movies.js");
app.use('/movies',routes);
app.use((err,req,res,next)=>
{
if(err)
{
 console.log("error occoured");
}
});
module.exports=app;
if(!module.parent) {
 app.listen(3000,() => console.log('Example app listening on port 3000!'));
}