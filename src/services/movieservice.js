let connectdb=require("../config/config.js").connectdb;
async function movies()
{
    try{
    var db= await connectdb();
    }catch(err)
    {
        res.send(err);
    }
    	return new Promise((resolve,reject)=>
	{
     db.collection('Movies').find({}).toArray(function(err, result) {
    if (err)
    {
    reject("database query error");
    }
    else
    {
        //console.log(result);
    	resolve(result);
    }
});
	});
}
async function addmovie(params)
{
    //console.log(params);
    try{
    var db= await connectdb();
    }catch(err)
    {
        res.send(err);
    }
    return new Promise((resolve,reject)=>
    {
        db.collection('Movies').insertOne(params, function(err, res) {
                                 if (err)
                                 {
                                  reject("database insertion error");
                                }
                                else{
                                    resolve([{"status":0}]);
                                }
    });
    });
}
async function updatemovie(params)
{
     try{
    var db= await connectdb();
    }catch(err)
    {
        res.send(err);
    }
    return new Promise((resolve,reject)=>
    {
        //console.log(params);
        let id=params.id;

        db.collection('Movies').updateOne({"id":id},{$set:params}, function(err, res) {
                                 if (err)
                                 {
                                  reject("database insertion error");
                                }
                                else{
                                    resolve([{"status":0}]);
                                }
    });
    });
}
async function readmovie(params)
{
     try{
    var db= await connectdb();
    }catch(err)
    {
        res.send(err);
    }
    return new Promise((resolve,reject)=>
    {
        db.collection('Movies').findOne(params.id, function(err, res) {
                                 if (err)
                                 {
                                  reject("database insertion error");
                                }
                                else{
                                    resolve(res);
                                }
    });
    });
}
exports.movies=movies;
exports.addmovie=addmovie;
exports.updatemovie=updatemovie;
exports.readmovie=readmovie;