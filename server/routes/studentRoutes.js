const express = require("express")
const studentRouter = express.Router();

const {getAllStudent,getStudent,addStudent,deletStudent,updateStudent} = require('../controller/studentController.js');


studentRouter.get('/',getAllStudent)
studentRouter.get('/:roll',getStudent)
studentRouter.post('/add',addStudent)
studentRouter.post('/update/',updateStudent)
studentRouter.post('/delete/',deletStudent)


module.exports = studentRouter;