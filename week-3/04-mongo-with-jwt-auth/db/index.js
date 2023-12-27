const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username :{type:String,  unique :true , required :true},
    password :{type:String,required: true},
    courses : [{type: mongoose.Schema.Types.ObjectId, ref: "Course" }]
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
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
    }],
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title : {
        type:String,
        required:true,
        // unique:true
    },
    description:{
        type:String,
        required:true,
        // unique:true
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
        required:true,
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