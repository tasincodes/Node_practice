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

exports.readStudent = (req, res) => {
    let query = {};
    
    students.find(query)
        .select("name city")
        .then(data => {
            res.status(200).json({ success: true, data: data });
        })
        .catch(error => {
            res.status(400).json({ success: false, error: error.message });
        });
};


