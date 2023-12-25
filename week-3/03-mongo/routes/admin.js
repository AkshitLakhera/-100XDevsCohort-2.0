const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin,Course} = require('./db')

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const {username,password} = req.body
    // Code to create a new admin with creat method
    const newAdmin = await Admin.create({username,password});
    if (!newAdmin){
        res.status(500).send("Error in sign up as admin")
    } else {
        res.status(200).send("Congratulatuions new user Admin is created")
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const {username,password} = req.header;
    // not writing course id because it is automatically made by react.
    const {title,description,price,imageLink,published} = req.body;
    const newCourse = await Course.create({title,description,price,imageLink,published});
    if (!newCourse){
        res.status(500).send("Error course can't be created")
    }else{
        res.status(200).send("Congratualtions new course  created");
    }

});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    const {username,password} = req.header;
    const allCourses  =  Course.find({});
    if(!allCourses){
        res.status(404).send("Cannot able to retrive the courses")
    } else{
        res.status(200).json({allCourses});
    }
    
});

module.exports = router;