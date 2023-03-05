const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require('cors')
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
// const jwt = require('jsonwebtoken');

const PORT = 4019;

dotenv.config();

mongoose.connect(process.env.MONGO_URL);


// middleware
app.use(express.json());
app.use(cors({
    credentials : true,
    origin : true,
}))
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);


app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));