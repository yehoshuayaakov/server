const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var testSchema =  new Schema ({
    name: {
        type:  String,
        required:  true,
    },
    id: {
        type : Number,
        required :  true,
        
    },
  
    date : {
        type: String,
    },
    testUrl: {
        type: String,
        
    },
    completedCode: {
        type: Number
    },
    internId: {
        type: Number
    },
    supervisorId: {
        type: Number
    },
    graderId : {
        type: Number
    },
    grade : {
        type: Number
    }
    
});

module.exports = mongoose.model("test", testSchema);