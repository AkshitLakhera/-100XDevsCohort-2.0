const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db")
const bcrypt = require("bcrypt");
const secret = require('../index');
const jwt = require("jsonwebtoken");

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const {username,password}=  req.body;
    if (!username || !password){
        return res.status(400).send({msg: "All fields are required"})
    }
    try{
        const hashedPassword = await bcrypt.hash(password, 10);
        await Admin.create({
            username:username,
            password:hashedPassword,
        })
        return res.status(201).send({
            message: "Admin created successfully"
        })
    }catch(err){
        return res 
        .status(500)
        .send({message:"error creating admin account",error:err})
    }

});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send({ message: "All fields are required!" });
  }
  try {
    const existingUser = await Admin.findOne({username:usernma})
    if(!existingUser){
        return res.status(400).send({ message: "Admin user not found" })
    }
    const isMatched = await bcrypt.compare(password,existingUser.password);
    if(!isMatched){
        res.status(411).send({message:"Wrong Credentials!"});

    }
    const token = jwt.sign(
        { _id: existingUser._id,username: username},
        secret,
        {expiresIn:"1d",
    }
    )
    return res.status(200).send({ token: token });
  } catch(err){
    return res
    .status(500)
      .send({ message: "Some error occured", error: err })
  }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const { title, description, price, imageLink } = req.body;
    if (!title || !description || !price || !imageLink) {
        return res.status(400).send({ message: "All fields are required!" });
      }
      try{
        const adminId = req.id;
        const admin = await Admin.findById(adminId);
        if(!admin){
            return res.status(404).send({ message: "Admin not found" });

        }
        const course = await Course.create({
            title: title,
            description: description,
            price: price,
            imageLink: imageLink,
            published: true,
            owner: admin.username,
          });
          admin.courses.push(course._id)
          await admin.save();
          return res.status(201).send({
            message: "Course created successfully",
            courseId: course._id,
          });

      } catch(error){
        res.status(404).sen({msg:"Error creating course", error: error})
      }


});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    try {
        const admin = await Admin.findById(req._id).populate("courses");
        return res.status(200).send({ courses: admin.courses });
      } catch (error) {
        return res
          .status(500)
          .send({ message: "Error fetching courses", error: error });
      }
});

module.exports = router;