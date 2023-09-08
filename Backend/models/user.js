const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    pswd: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        default: 0
    },
    // writeConcern: {
    //     w:1,
    //     j: true,
    //     wtimeout: 1000,
    // }
});
module.exports = mongoose.model("User", userSchema);