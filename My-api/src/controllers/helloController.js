exports.hello=(req,res)=>{
    res.status(200).json({status:"success",data:"hello this is express api"})

}
