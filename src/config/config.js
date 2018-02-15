let MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
function connectdb()
{
	//console.log(process.env.url);
	var url=process.env.url;
	return new Promise((resolve,reject)=>
	{
		MongoClient.connect(url,function(err, db) {
  				if (err){
  						reject("database connection error");
 						 }
 						 else
 						 {
 						 	resolve(db);
 						 }
 						});
	});
}
exports.connectdb=connectdb;