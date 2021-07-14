const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var internSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: false,
        unique : false
    },
    phonenumber: {
        type: Number,
        required: true
    },
     email : {
        type: String,
        //required : true,
        unique :  true
    },
    citizenshipId: {
        type: Number,
        required: false
    },
  
    password : { type: String },
    image:{
        data: Buffer,
        contentType: String,
        required: false
    },
    roleNumber : { type : Number},
    
    personalDetails : {
        age : { type: Number},
        country: { type: String },
        city : { type : String },
        graduationYear : { type : Number },
        academicInstitution : { type: String }
    },
 
    professionalDetails : {
    medicalInstitution: { type: String },
    department: { type: String },
    residency: { type: String },
    yearsOfResidency: { type: Number }
    },
    tests : [{
        name: {type : String},
        id: {
            type : Number,
           
           
        },
      
        dateAdded: {
            type: String,
            default : new Date().toUTCString()
        },
        grade: {
            type: Number
        }
    }]
});

module.exports = mongoose.model("intern", internSchema);