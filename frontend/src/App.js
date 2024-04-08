import React from "react";
import './style/style.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/sideBar";
import Hr from "./pages/HR";
import Students from "./pages/Students";
import HOD from "./pages/HOD";
import DepartmentList from "./components/HR/DepartmentList";
import StudentDetails from "./components/HR/StudentDetails";


export default function App() {
  return (
    <BrowserRouter>
      <div className="MainContainer">
        <Sidebar />
       
        <div className="Main">
          <Routes>
            <Route path="/" element={<Hr />} />
            <Route path="/students" element={<Students />} />
            <Route path="/hod" element={<HOD />} />

            <Route path="/college/:collegeName" element={<DepartmentList />} />
            <Route path="/college/:collegeName/:departmentName" element={<StudentDetails />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
