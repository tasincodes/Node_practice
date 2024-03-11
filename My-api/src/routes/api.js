const express = require("express");
const router = express.Router();

const helloController = require("../controllers/helloController");
const studentsController = require("../controllers/studentsController");
const JWTPractice = require("../controllers/JWTpractice")
const tokenverifyMidlware = require("../middleware/tokenVerifymiddleware");
const tokenIssuuue= require("../controllers/TokenIssue");


router.get("/tokenIssue",tokenIssuuue.tokenIssue);
router.get("/hello-get",tokenverifyMidlware, helloController.hello);
router.post("/hello-post",tokenverifyMidlware, helloController.hello);
router.post("/insertStudent",tokenverifyMidlware,studentsController.insertStudent);
router.get("/readStudent",tokenverifyMidlware,studentsController.readStudent); // Changed from post to get
router.put("/updateStudent/:id", tokenverifyMidlware,studentsController.updateStudent); // Changed from post to put
router.delete("/deleteStudent/:id", tokenverifyMidlware,studentsController.deleteStudent);


//create jwt token
router.get("/createWebtoken/:Token",JWTPractice.createWebtoken)
//decode jwt token
router.get("/decodeWebtoken/",JWTPractice.decodeWebtoken)
module.exports = router;
