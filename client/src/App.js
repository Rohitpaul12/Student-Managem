import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import StudentList from "./components/studentList";
import {Routes,Route} from 'react-router-dom'
import AddStudent from "./pages/AddStudent";
import Student from "./pages/Student";
import EditStudent from "./pages/EditStudent";
function App() {
  return (
    <div className="App">
      <Navbar/>
     
      <Routes>
        <Route path={'/'} element={<StudentList/>}/>
        <Route path={'/student/add'} element={<AddStudent/>}/>
        <Route path={'/student/update/:id'} element={<EditStudent/>}/>
        <Route path={'/student/:id'} element={<StudentDetails/>}/>
      </Routes>

     
    </div>
  );
}

export default App;
