const express = require("express");
const mongoose = require("mongoose");
const {Schema, model, mongo} = require("mongoose");

const userSchema= new mongoose.Schema({
    name : {
        type: String,
        required: true, 
    },

    email:{
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
    },

    date: {
        type: Date,
        default: Date.now,
    }
});

const User = mongoose.model("user", userSchema);
module.exports = User;