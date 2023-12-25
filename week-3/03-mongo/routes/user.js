const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const {username,password} = req.body;
    const verifiedUser = await User.create({username,password});
    if(!verifiedUser){
        res.status(404).send("User cannot be created")
    }
    else{
        res.status(200).send("Congratualtions new user created")
    }
});

router.get('/courses',  async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({});
    res.send(200).json({course:[courses]});
});

router.post('/courses/:courseId', userMiddleware,async (req, res) => {
    // Implement course purchase logic
    try{
        const course = await Course.findOne({courseId : req.params.courseId});
    if(!course){
        res.status(500).send("Cannot able to find the course")
    } else{
     const updateUser = await User.findByIdAndUpdate(
        {username:req.user.usernamme},
        {
            $push :{
                purchasedCourses:course
            }
        },
        {
            new:true
        }
        
     )

    }} catch(e){
      console.log("error")
    }

});

router.get('/purchasedCourses', userMiddleware,async (req, res) => {
    // Implement fetching purchased courses logic
    const getUser =  await User.findOne(req.user).populate('purchasedCourses');
    res.status(200).json({purchasedCourses:getUser.purchasedCourses});
});
module.exports = router;