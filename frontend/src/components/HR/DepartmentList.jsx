import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import CollegeSke from "../Skeleton/CollegeSke";
import DepartmentImg from '../../assets/Department.png'

const DepartmentList = () => {
  const { collegeName } = useParams();
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [departmentsLength, setDepartmentLength] = useState(0);

  useEffect(() => {
    fetchDepartments();
  }, [collegeName]);

  const fetchDepartments = async () => {
    try {
      setTimeout(async () => {
        const response = await axios.get(
          `http://localhost:5000/api/students/college/${collegeName}`
        );
        const uniqueDepartments = [
          ...new Set(response.data.map((student) => student.department)),
        ];
        setDepartments(uniqueDepartments);
        setDepartmentLength(uniqueDepartments.length);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error fetching departments:", error);
    }
  };

  return (
    <div className="relative z-40 mx-auto mt-12">
      <div className="flex flex-col items-center justify-center py-5 gap-y-2">
        <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
          {collegeName}
        </h2>
        <p className="text-lg font-medium text-slate-700/70">
        Explore Top {departments.length} Departments for Specialized Growth  
        </p>
      </div>
      <div className="flex flex-wrap justify-center mx-auto lg:w-full md:w-5/6 xl:shadow-small-blue">
        {loading
          ? Array.from({ length: departments.length > 0 ? departments.length : 4 }).map(
              (_, index) => <CollegeSke key={index} />
            )
          : departments.map((department, index) => (
              <Link
                key={department}
                to={`/college/${encodeURIComponent(collegeName)}/${encodeURIComponent(department)}`}
                className="m-6"
              >
                <div className="flex-shrink-0 relative overflow-hidden bg-[#f68523] rounded-lg max-w-xs shadow-lg">
                  <svg
                    className="absolute bottom-0 left-0 mb-8"
                    viewBox="0 0 375 283"
                    fill="none"
                    style={{ transform: "scale(1.5)", opacity: 0.1 }}
                  >
                    <rect
                      x="159.52"
                      y="175"
                      width="152"
                      height="152"
                      rx="8"
                      transform="rotate(-45 159.52 175)"
                      fill="white"
                    />
                    <rect
                      y="107.48"
                      width="152"
                      height="152"
                      rx="8"
                      transform="rotate(-45 0 107.48)"
                      fill="white"
                    />
                  </svg>
                  <div className="relative flex items-center justify-center px-10 pt-10">
                    <div
                      className="absolute bottom-0 left-0 block w-48 h-48 ml-3 -mb-24"
                      style={{
                        background: "radial-gradient(black, transparent 60%)",
                        transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                        opacity: 0.2,
                      }}
                    ></div>
                    <img
                      className="relative w-32"
                      src={DepartmentImg}
                      alt={department}
                    />
                  </div>
                  <div className="relative px-6 pb-6 mt-6 text-white">
                    <span className="block text-xl font-semibold text-center">
                      {department}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
};

export default DepartmentList;
