const Student = require('../models/studentModel')
// get all student
const getAllStudent = async (req,res)=>{
    try {
        const allStudent = await Student.find()
        res.status(200).json(allStudent)
    } catch (error) {
        console.log("err in allstudent");
    }
}
//get one student
const getStudent = async(req,res)=>{
    try {
        const roll = req.params['roll']
        const oneStudent = await Student.findOne({roll})
        res.status(200).json(oneStudent)
    } catch (error) {
        console.log("err");
    }
}
//create  a student
const addStudent = async (req,res)=>{
    let {roll,name,email,contact,address,gender} = req.body
    try {

        const exists = await Student.findOne({roll})
        if(exists){
            throw Error("Student aLready Exists")
        }
        const student = await Student.create({roll,name,email,contact,address,gender})
        
        res.status(200).json(student)
    } catch (error) {
        console.log("err");
        // res.status(409).json({"error":"Student"})
    }
}
// delete a student
const deletStudent = async(req,res)=>{
    try {
        const {roll} = req.body
        const oneStudent = await Student.deleteOne({roll})
        res.status(200).json(oneStudent)
    } catch (error) {
        console.log("err");
    }
}
// update studnt
const updateStudent = async (req, res) => {
    const { roll, name, email, contact, address, gender } = req.body;
  
    try {
      const student = await Student.findOne({ roll: roll });
  
      if (!student) {
        return res.status(404).json({ message: 'Student not found' });
      }
  
      student.name = name;
      student.email = email;
      student.contact = contact;
      student.address = address;
      student.gender = gender;
  
      await student.save();
  
      res.json({ message: 'Student updated successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error updating student', error: error.message });
    }
  };
module.exports = {getAllStudent,getStudent,addStudent,deletStudent,updateStudent}