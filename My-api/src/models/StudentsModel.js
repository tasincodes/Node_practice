const mongoose=require('mongoose')

const dataSchema = mongoose.Schema({
    name :String,
    id :String,
    sec: String,
    marks : String

})

const StudentsModel = mongoose.model('students',dataSchema)
module.exports = StudentsModel