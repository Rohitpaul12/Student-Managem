import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import StudentList from "./components/studentList";
import {Routes,Route} from 'react-router-dom'
import AddStudent from "./components/AddStudent";
import Student from "./components/Student";
function App() {
  return (
    <div className="App">
      <Navbar/>
     
      <Routes>
        <Route path={'/'} element={<StudentList/>}/>
        <Route path={'/student/add'} element={<AddStudent/>}/>
        <Route path={'/student/:id'} element={<Student/>}/>
      </Routes>

     
    </div>
  );
}

export default App;
