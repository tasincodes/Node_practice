const express = require("express");
const router = express.Router();
const {request} = require("express");

const helloController = require("../controllers/helloController");
const studentsController = require("../controllers/studentsController");



router.get("/hello-get",helloController.hello)
router.post("/hello-post",helloController.hello)
router.post("/insertStudent",studentsController.insertStudent)
router.post("/readStudent",studentsController.readStudent)
router.post("/updateStudent/:id",studentsController.updateStudent)
module.exports=router
