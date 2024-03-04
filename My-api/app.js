const express = require("express")
const router = require("./src/routes/api")
const app = new express()

//security middleware import

const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
const xssClean = require('xss-clean')
const hpp = require('hpp')
const cors = require('cors')
const ExpressMongoSanitize = require("express-mongo-sanitize")
const mongoose = require("mongoose")


//security middleware implementation

app.use(cors())
app.use(helmet())
app.use(hpp())
app.use(xssClean())
app.use(cors())
app.use(ExpressMongoSanitize())

//request rate limiting

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Redis, Memcached, etc. See below.
})

app.use(limiter)

//Mongo Db database connection


let URI = "mongodb://127.0.0.1:27017/school"
let OPTION ={'user':'','pass':''}

mongoose.connect(URI,OPTION)
	.then(()=>{
		console.log("connection success")
	})
	.catch((error) => {
		console.error("Connection error:", error);
	  });











app.use("/api/v1",router)

app.use("*",(req,res)=>{
    res.status(404).json({status:'fail',data:'Not found'})
})

module.exports=app