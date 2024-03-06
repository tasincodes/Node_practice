const express = require("express");
const router = express.Router();

const helloController = require("../controllers/helloController");
const studentsController = require("../controllers/studentsController");

router.get("/hello-get", helloController.hello);
router.post("/hello-post", helloController.hello);
router.post("/insertStudent", studentsController.insertStudent);
router.get("/readStudent", studentsController.readStudent); // Changed from post to get
router.put("/updateStudent/:id", studentsController.updateStudent); // Changed from post to put
router.delete("/deleteStudent/:id", studentsController.deleteStudent);
module.exports = router;
