const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Username Required !"],
        trim : true
    },
    password : {
        type : String,
        required : [true, "Password Required"],
    },
    email : {
        type : String,
        required : [true, "Username Required!"],
        unique : true
    }

}, {timestamps:true})

const User = mongoose.model("User", userSchema);
module.exports = User;