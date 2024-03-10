var jwt = require("jsonwebtoken")
//create token
exports.tokenIssue=(req,res)=>{
    let Payload={
        exp :Math.floor(Date.now()/1000)+(60*60),
        data:{name:"Tasin",city:"ctg",admin:true}
    }
    let token= jwt.sign(Payload,"secretkey123");
    res.send(token)
}