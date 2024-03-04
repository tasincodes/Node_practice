const express = require("express")
const router = express.Router()
const helloController = require("../controllers/helloController")


router.get("/hello-get",helloController.hello)
router.post("/hello-post",helloController.hello)


module.exports=router
