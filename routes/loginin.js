const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/userSchema.js');
const router = express.Router();
const dotenv = require("dotenv");
// router.use(express.urlencoded({ extended: true }));

// Add body parser middleware
router.use(express.json());
router.use(express.urlencoded({ extended: true }));



dotenv.config();


// Helper function to generate token
const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '30d' });

  res.cookie('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 30 * 24 * 60 * 60 * 1000
  });

  return token;
};

//Route for Register
router.post("/register",async (req,res)=>{
    try{
        console.log(req.body);
        const {name,email,password,role}=req.body;
        if(await User.findOne({email:email})){
            return res.status(400).json({error:"user already exists"});
        }

        const user=await User.create({name:name,email:email,password:password,role:role});
        generateToken(res,user._id);
        res.status(201).json({ id: user._id, name: user.name, email: user.email, role: user.role });

    }catch(err){
        console.log(err);
    }
});


// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    generateToken(res, user._id);
    res.json({ id: user._id, name: user.name, email: user.email, role: user.role });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports=router;