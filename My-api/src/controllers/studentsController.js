
const students = require('../models/StudentsModel');
const e = require("express");
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


exports.studentUpdate = (req, res) => {
    let id = req.params.id;
    let status = req.params.status;
    let Query = {_id: id};
    let reqBody = {status: status};
    TaskModel.updateOne(Query, reqBody, (err, data) => {
        if (err) {
            res.status(400).json({status: "Something Wrong", data: err})
        } else {
            res.status(200).json({status: "Task Updated", data: data})
        }
    })
}