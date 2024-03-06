const Students = require('../models/StudentsModel');

exports.insertStudent = (req, res) => {
    let reqBody = req.body;
    Students.create(reqBody)
        .then(data => {
            res.status(201).json({ status: "success", data: data });
        })
        .catch(error => {
            res.status(400).json({ status: "fail", data: error });
        });
}

exports.readStudent = (req, res) => {
    Students.find({})
        .then(data => {
            res.status(200).json({ success: true, data: data });
        })
        .catch(error => {
            res.status(400).json({ success: false, error: error.message });
        });
};

// exports.updateStudent = (req, res) => {
//     let id = req.params.id;
//     let updateData = req.body;
//     Students.findByIdAndUpdate(id, updateData)
//         .then(data => {
//             res.status(200).json({ status: "success", data: data });
//         })
//         .catch(error => {
//             res.status(400).json({ status: "fail", error: error.message });
//         });
// }

