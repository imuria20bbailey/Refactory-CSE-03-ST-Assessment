//introducing mongoose to the file
const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

//access schema function in mongoose and storing in the variable schema
const Schema = mongoose.Schema;

//using the function to build schema.this is the data structure
const applicationSchema = new Schema({
   
    firstName:{
        type: String,
        trim: true
    },

    lastName:{
        type: String,
        trim: true
    },

    course:{
        type: String,
        enum: ["CSE-Javascript", "CSE-Paython"]
    },

    entrySchema:{
        type: String,
        enum: ["Diploma", "Certificate"]
    },

    intake:{
        type: String,
        enum: ["January", "August"]
    },

    sponsorship:{
        type: String,
        enum: ["Full Sponsorship", "Half Sponsorship"]
    },

    gender:{
        type: String,
        enum: ["Male", "Female"]
    },

    dateOfBirth:{
        type: String,
        trim: true
    },

    residence:{
        type: String,
        trim: true
    },

    createdAt:{
        type: Date,
        default: Date.now,
        trim: true
    }

   
});

//exporting our module
module.exports = mongoose.model('Application', applicationSchema);

