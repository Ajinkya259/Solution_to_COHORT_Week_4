const { Router } = require("express");
const { Admin, Course }=require("../db")
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
router.post('/signup',async (req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;
    
    await Admin.create({
        username,
        password
    })
    res.json({
        message:"Admin Created OK...!!"
    }
    )
    
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

router.get('/courses', adminMiddleware,async (req, res) => {
    // Implement fetching all courses logic
    const response=await Course.find({})
        res.json({
            courses:response
    })
});

module.exports = router;


