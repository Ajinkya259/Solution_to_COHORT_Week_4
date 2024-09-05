const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { JWT_SECERET } = require("../config");
const { Admin, User, Course } = require("../db");
const jwt=require("jsonwebtoken");

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const username=req.body.username;
    const password=req.body.password;
   
    await User.create({
        username:username,
        password:password
    })
    res.json({
        message:"user Created OK...!!"
    })
    
});

router.post('/signin', async(req, res) => {
    // Implement usser signin logic
    const username=req.body.username;
    const password=req.body.password;
    const user=await User.find({
        username,
        password
    })
    if(user){
        const token= jwt.sign({
            username
        },JWT_SECERET); 
        res.json({
            token 
        })
    }
    else{
        res.status(403).json({
            message:"Not a valid user "
        })

    }
});

router.get('/courses',async (req, res) => {
    // Implement listing all courses logic
    const response=await Course.find({})
        res.json({
            courses:response
    })
});

router.post('/courses/:courseId',userMiddleware,async(req, res) => {
    // Implement course purchase logic
    const username=req.username;
    const courseId=req.params.courseId;
    await User.updateOne({
        username:username
    },{
        "$push":{
            purchasedCourses:courseId
        }    
    })
    res.json({
        message:"Course Purchased Successfully"
    })
    
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const username=req.username;
    const user= await User.findOne({
        username:username
    })
    console.log(user.purchasedCourses)
    const courses=await Course.find({
        _id:{
        
        "$in":user.purchasedCourses}
    })
    res.json({
        courses:courses
    })
});

module.exports = router