const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var internSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    Id: {
        type: Number,
        required: false
    },
    phonenumber: {
        type: Number,
        required: true
    },
    password:{
        type: String,
        required: false
    },
    citizenshipId: {
        type: Number,
        required: false
    },
    image:{
        data: Buffer,
        contentType: String,
        required: false
    }

});
module.exports = mongoose.model("intern", internSchema);