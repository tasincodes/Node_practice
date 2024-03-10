var jwt = require("jsonwebtoken")



//create token
exports.createWebtoken=(req,res)=>{
    let Payload={
        exp :Math.floor(Date.now()/1000)+(60*60),
        data:{name:"Tasin",city:"ctg",admin:true}
    }
    let token= jwt.sign(Payload,"secretkey123");
    res.send(token)

}
//decode token
exports.decodeWebtoken=(req,res)=>{
  let token = req.headers["token-key"]
  
  jwt.verify(token, 'secretkey123', function(err, decoded) {
    if(err){
        res.status(401).json({status:"invalid token",data:err});
    }
    else{
    res.status(200).json({status:"success token",data:decoded});
    }
});

}