var express = require("express")
var app = express()
var bodyParser = require('body-parser')//for json parsing
app.use(bodyParser.json())//for json parsing
var multer = require("multer")
var upload =multer()
app.use(upload.array('files'))
app.use(express.static("public"))





//working with request

app.get('/query',function(req,res){

    let firstname=req.query.firstname
    let lastname=req.query.lastname

res.end(firstname+" "+lastname)    
})
//working with req header
app.get('/',function(req,res){

    let firstname=req.header('firstname')
    let lastname=req.header('lastname')

    res.end(firstname+" "+lastname)    
})

app.post('/',function(req,res){
    res.send("this is just simple test for post")

})
// post method url info 
app.post('/',function(req,res){
    
    let firstname=req.query.firstname
    let lastname=req.query.lastname

    res.end(firstname+" "+lastname)   
})

//post request with header properties
app.post('/pos',function(req,res){
    
    let userName=req.header('username')
    let password=req.header('password')

    res.send("username :"+userName+" "+"password"+password)   
})
//post application json
app.post('/jsn',function(req,res){
    let jsonData = req.body
    // let jsonstring = JSON.stringify(jsonData)
    // let name = jsonData.name
    let name = jsonData['name']
    res.send(name)
})

app.post('/mult',function(req,res){
    let jsonData = req.body
    res.send(JSON.stringify(jsonData))

})

var storage = multer.diskStorage({
    destination : function(req,file,callback){
        callback(null,'./uploads')
    },
    filename : function(req,file,callback){
        callback(null,file.originalname)
    }
})

var uploads = multer({storage:storage}).single('files')
app.post('/fileupld',function(req,res){
    uploads(req,res,function(error){
        if(error){
            console.error(error)
            res.send("error occured while file uploading")
        }
        else{
            res.send("file upload success using multer upload")
        }
    })
})

app.listen(8000,function(){
    console.log("server connection success")

})
