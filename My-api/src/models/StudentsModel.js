const mongoose=require('mongoose')

const dataSchema = mongoose.Schema({
    name :String,
    id :String,
    sec: String,
    remarks : {type:String,default:"No default value"}

},{versionKey:false})

const StudentsModel = mongoose.model('students',dataSchema)
module.exports = StudentsModel