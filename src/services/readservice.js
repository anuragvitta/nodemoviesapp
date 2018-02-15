let connectdb=require("../config/config.js").connectdb;
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
        console.log(params);
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
exports.readmovie=readmovie;