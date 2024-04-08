import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useNavigate } from "react-router-dom";
import CollegeList from "../components/HR/CollegeList";
import DepartmentList from "../components/HR/DepartmentList";
import StudentDetails from "../components/HR/StudentDetails";
import SearchBar from "../components/HR/SearchBar";
import SearchResults from "../components/HR/SearchResults";

const HR = () => {
  const [colleges, setColleges] = useState([]);
  const [collegesLength, setCollegesLength] = useState(0);
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchColleges();
  }, []);

  const fetchColleges = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/students");
      const uniqueColleges = [
        ...new Set(response.data.map((student) => student.collegeName)),
      ];
      setColleges(uniqueColleges);
      setCollegesLength(uniqueColleges.length);
    } catch (error) {
      console.error("Error fetching colleges:", error);
    }
  };

  const handleSearch = async (keyword) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/search?keyword=${keyword}`
      );
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  const handleViewDetails = (studentId) => {
    navigate(`/student/${studentId}`);
  };

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      <SearchResults
        searchResults={searchResults}
        handleViewDetails={handleViewDetails}
      />
      <Routes>
        <Route
          exact
          path="/"
          element={<CollegeList colleges={colleges} length={collegesLength} />}
        />
        <Route path="/college/:collegeName" element={<DepartmentList />} />
        <Route
          path="/college/:collegeName/:departmentName"
          element={<StudentDetails />}
        />
      </Routes>
    </div>
  );
};

export default HR;
