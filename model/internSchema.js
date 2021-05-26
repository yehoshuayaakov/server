const mongoose = require(mongoose);
const Schema = mongoose.Schema;

var internSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
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
        required: true
    },
    image:{
        data: Buffer,
        contentType: String,
        required: false
    }

});
module.exports = mongoose.model("intern", internSchema);