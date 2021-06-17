const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var supervisorSchema =  new Schema ({
    name: {
        type:  String,
        required:  true,
    },
    Id: {
        type : String,
        required :  true,
        unigque : true,
    },
    email : {
        type: String,
        required : true,
        unique :  true
    },
    password : {
        type: String,
    },
    phonenumber: {
        type: Number,
        required: true
    },
    roleNumber : {
        type : Number
    }
});

module.exports = mongoose.model("supervisor", supervisorSchema);