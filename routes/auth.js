const router = require("express").Router();
const User = require("../models/Users.js");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

//REGISTER
router.post("/register", async (req, res) => {
  const {username,email,password} = req.body; 
  try {
    const userFromDb = await User.findOne({ email: email });
    if(userFromDb){
      res.status(400).send({msg:"User Already Exist"})
    }else{

          //generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create new user
    const newUser = new User({
      username: username,
      email: email,
      password: hashedPassword,
    });

        //save user and respond
        const user = await newUser.save();
        res.status(200).json({msg:"Registered Successfully",user : user});

    }
  } catch (err) {
    res.status(500).json(err)
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email: email });
    !user && res.json("user not found");

    const validPassword = await bcrypt.compare(password, user.password)
    !validPassword && res.json({msg : "Invalid Credentials"})
    
    const token = jwt.sign({id:user._id}, process.env.SECRET_KEY)
    validPassword && res.send({msg:"Login Successfully",token:token,user:user})
  } catch (error) {
    res.status(400).json(err)
  }
});

//get user

router.get("/:_id", async (req,res) => {
  const { _id } = req.params
  try{
  const result = await User.findById(_id)
  res.status(200).send(result)
  }catch(err){
    res.status(500).json(err)
  }
})

module.exports = router;