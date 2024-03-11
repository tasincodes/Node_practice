var jwt = require("jsonwebtoken")
module.exports=(req,res,next)=>{
    
        let token = req.headers["token-key"]
        
        jwt.verify(token, 'secretkey123', function(err, decoded) {
          if(err){
              res.status(401).json({status:"invalid token",data:err});
          }
          else{
          next()
          }
      });
      
      
}