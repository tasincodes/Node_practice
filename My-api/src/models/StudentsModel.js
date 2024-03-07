const mongoose=require('mongoose')

const dataSchema = mongoose.Schema({
    name :{type:String},
    id :{type:String},
    sec:{type:Number,min:6,max:8},
    remarks : {type:String,default:"No default value"}

},{versionKey:false})

const StudentsModel = mongoose.model('students',dataSchema);
module.exports = StudentsModel;


