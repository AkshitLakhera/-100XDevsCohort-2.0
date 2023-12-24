const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:Vihaan12%40@cluster0.jpfavz7.mongodb.net/coursewebsite');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username :{
        type:String,
        required:true
    },
    password : {
        type:String,
        required:true,
        length:8,
    },
    courses : [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course,'
    }
    ]});

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password :{
        type:String,
        required:true
    },
    purchasedCourses :[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    courseId :{
        type:Number,
        required:true,
        unique:true    },
    title : {
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true,
        unique:true
    },
    price:{
        type:Number,
        required:true,
    },
    imageLink:{
        type:String,
        required:true
    },
    published:{
        type:Boolean,
        required:true
    },
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}