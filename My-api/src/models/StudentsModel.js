const mongoose=require('mongoose')

const dataSchema = mongoose.Schema({
    name :{type:String},
    id :{type:String},
    sec:{type:Number,
   min:[6,"minimum value 6 but got value = {VALUE}"],
    max:[12,"maximum value 12 but got value ={VALUE}"]
    },
    remarks : {type:String,default:"No default value"},
    Mobile :{
        type:String,
        //if you want to use regex for phone number verfication
        // validate: {
        //     validator: (value) =>{
        //         return /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/.test(value)
        //     },
        //     message:"11 digit mobile num required"
        //   }
        validate: {
            validator: (value) => value !== undefined && value.length === 11,
            message: 'Mobile number must be 11 digits long'
          }
    }

},{versionKey:false})

const StudentsModel = mongoose.model('students',dataSchema);
module.exports = StudentsModel;


