const express = require("express");
const {loginUser,signupUser} = require("../controller/userController");
const userRouter = express.Router();

userRouter.post("/login",loginUser);
userRouter.post("/signup",signupUser);



module.exports = userRouter;