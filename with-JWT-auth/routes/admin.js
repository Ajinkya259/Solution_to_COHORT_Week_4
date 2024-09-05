const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const jwt=require("jsonwebtoken");
const { JWT_SECERET } = require("../config");
const { Admin, User, Course } = require("../db");


// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;
    
    await Admin.create({
        username:username,
        password:password
    })
    res.json({
        message:"Admin Created OK...!!"
    }
    )
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;
    const user=await Admin.find({
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

router.post('/courses', adminMiddleware, async(req, res) => {
    
    // Implement course creation logic
    const title=req.body.title;
    const description=req.body.description;
    const imageLink=req.body.imageLink;
    const price=req.body.price;
    const newcourse= await Course.create({
        title,
        description,
        imageLink,
        price
    })
    res.json({
        message:"Course Created OK..!!!", courseId: newcourse._id
    })
});



router.get('/allcourses', adminMiddleware,async (req, res) => {
    // Implement fetching all courses logic
    const response=await Course.find({})
        res.json({
            courses:response
    })
});
module.exports = router;


