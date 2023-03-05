const router = require("express").Router();
const User = require("../models/Users.js");
const { auth } = require('../middleware/auth.js')

router.put("/update/:_id", auth, async (req, res) => {
    const userId = req.params._id
    const { username, email, description, profilePicture, city, age, gender, state, country, mobile, dateOfBirth, maritalStatus } = req.body
    try{
        const updatedUser = await User.findByIdAndUpdate({ _id : userId }, { $set : {username : username, email : email, profilePicture : profilePicture, description : description, city : city, age : age, gender : gender, country : country, state : state, mobile : mobile, dateOfBirth : dateOfBirth, maritalStatus : maritalStatus} })
        res.json(updatedUser)
    }catch(err){
    console.log(err)
    }
})

module.exports = router;