const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            require: true,
            min: 3,
            max: 20,
            unique: true,
          },
          email: {
            type: String,
            required: true,
            max: 50,
            unique: true,
          },
          password: {
            type: String,
            required: true,
            min: 6,
          },
          profilePicture: {
            type: String,
            default: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1085&q=80",
          },
          description: {
            type: String,
            max: 50,
            default: "NA",
          },
          city: {
            type: String,
            max: 50,
            default: "NA",
          },
          age: {
            type : String,
            default: "NA",
          },
          gender: {
            type : String,
            min : 4,
            max : 6,
            default: "NA",
          },
          dateOfBirth: {
            type : String,
            default: "NA",
          },
          mobile: {
            type: String,
            min : 10,
            default: "NA",
          },
          maritalStatus: {
            type : String,
            default: "NA",
          },
          state: {
            type : String,
            default : "NA"
          },
          country: {
            type : String,
            default :"NA"
          },
          verifyToken: {
            type : String,
            default :""
          },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema)