var express = require("express")
app =express()
app.get('/',function(req,res){
    res.send("hello express js")
})
// res.send() defines body of response
// res.end() defines end result
app.post('/about',function(req,res){
    res.end("this is simple string response")
})
// response status code
app.get('/three',function(req,res){
    res.status(401).end('unauthorized')

})
//json response
app.get('/four',function(req,res){
    let myjsonArray = [
        {
            name : "tasin",
            country : "bangladesh",
            occupation : "engnr.."
        },
        {
            name : "zahed",
            country : "spain",
            occupation : "engnr..",
        },
        {
            name : "shahed",
            country : "italy",
            occupation : "engnr..",
        }
    ]
    res.json(myjsonArray)

})
// response download
app.get('/five',function(req,res){
    res.download('./uploads/abc.jpg')
})
// response redirect 
app.get('/bd',function(req,res){
    res.redirect('http://localhost:8000/ind')
})
app.get('/ind',function(req,res){
    res.send("this is india")
})
app.get('/six',function(req,res){
    res.append("name","tasin")
    res.append("name","mongo")
    res.append("name","shahed")
    res.send("this function is for adding data to header")
    res.status(201).end()
})
//sets cookie
app.get('/cooks',function(req,res){
    res.cookie("name","zahed")
    res.cookie("age","19")
    res.end("cookies set success")
})
app.get('/cookieclear',function(req,res){
    res.clearCookie('age')
    res.end("cookies clear success")
})

















app.listen(8000,function(){
    console.log("server connection success")

})