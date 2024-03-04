const students = require('../models/StudentsModel');
//crud 


//create


exports.insertStudent = (req, res) => {
    let reqBody=req.body;
    students.create(reqBody)
    .then(reqBody => {
        res.status(201).json({ status: "success", data: reqBody });
    })
    .catch(error => {
        res.status(400).json({ status: "fail", data: error });
    });

}

