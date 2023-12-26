const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin,Course} = require('../db')

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
    // not writing course id because it is automatically made by react.
    const {courseId,title,description,price,imageLink,published} = req.body;
    const newCourse = await Course.create({courseId,title,description,price,imageLink,published});
    if (!newCourse){
        res.status(500).send("Error course can't be created")
    }else{
        res.status(200).send("Congratualtions new course  created");
    }

});
// router.post("/courses", adminMiddleware, async (req, res) => {
//     const { title, description, price, imageLink } = req.body;
//     if(!title || !description || !price || !imageLink){
//       return res.status(400).send({message:"All fields are required!"})
//     }
//     try {
//       const admin = await Admin.findById(req.admin._id);
//       const course = await Course.create({
//         title: title,
//         description: description,
//         price: price,
//         imageLink: imageLink,
//         published: true,
//         owner: admin.username,
//       });
//       admin.courses.push(course._id);
//       await admin.save();
//       return res.status(201).send({
//         message: "Course created successfully",
//         courseId: course._id,
//       });
//     } catch (error) {
//       return res
//         .status(500)
//         .send({ message: "Error creating course", error: error });
//     }
//   });





router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const allCourses  = await  Course.find({});
    if(!allCourses){
        res.status(404).send("Cannot able to retrive the courses")
    } else{
        res.status(200).json({allCourses});
    }
    
});

module.exports = router;