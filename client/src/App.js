import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import StudentList from "./components/studentList";
import {Routes,Route} from 'react-router-dom'
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";
import StudentDetails from "./pages/StudentDetails";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
function App() {
  return (
    <div className="App">
      
      <Navbar/>
     
     {/* All routes in frontend using react-router-dom */}
      <Routes>
        <Route path={'/'} element={<StudentList/>}/>
        <Route path={'/student/add'} element={<AddStudent/>}/>
        <Route path={'/student/update/:id'} element={<EditStudent/>}/>
        <Route path={'/student/:id'} element={<StudentDetails/>}/>
        <Route path={'/login'} element={<Login/>}/>
        <Route path={'/signup'} element={<Signup/>}/>
      </Routes>

     
    </div>
  );
}

export default App;
