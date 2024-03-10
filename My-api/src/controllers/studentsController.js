const Students = require('../models/StudentsModel');

exports.insertStudent = (req, res) => {
    let reqBody = req.body;
    console.log(reqBody)
    Students.create(reqBody)
        .then(data => {
            res.status(202).json({ status: "success", data: data });
        })
        .catch(error => {
            res.status(400).json({ status: "fail", data: error });
        });
        
}


exports.readStudent = (req, res) => {
    let querry = {name,id}
    Students.find(querry)
        .then(data => {
            res.status(200).json({ success: true, data: data });
        })
        .catch(error => {
            res.status(400).json({ success: false, error: error.message });
        });
};

 
exports.updateStudent = (req, res) => {
    let id = req.params.id;
    let updateData = req.body;
    Students.findByIdAndUpdate(id, updateData)
        .then(data => {
            res.status(200).json({ status: "success", data: data });
        })
        .catch(error => {
            res.status(400).json({ status: "fail", error: error.message });
        });
}


exports.deleteStudent=(req,res)=>{
    let id = req.params.id
    let deleteData = req.body
    Students.findByIdAndDelete(id,deleteData)
    .then(data =>{
        res.status(200).json({status:"delete success",data:data});
    })
    .catch(error=>{
        res.status(400).json({status:"failed to delete",error:error.message})
    })
}



// exports.updateStudent = async (req, res) => {
//     const id = req.params.id;
//     const updateData = req.body;

//     try {
//         const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//         await client.connect();

//         const db = client.db(dbName);
//         const collection = db.collection('students');

//         const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: updateData });

//         if (result.modifiedCount === 1) {
//             res.status(200).json({ status: "success", data: result });
//         } else {
//             res.status(404).json({ status: "fail", message: "Student not found or data is identical" });
//         }

//         client.close();
//     } catch (error) {
//         res.status(500).json({ status: "error", error: error.message });
//     }
// };
