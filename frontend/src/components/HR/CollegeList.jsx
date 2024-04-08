import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SNSCE from "../../assets/SNSCE.png";
import SNSCT from "../../assets/SNSCT.png";
import SNSAHC from "../../assets/SNSPHA.png";
import SNSRA from "../../assets/SNSRA.png";
import CollegeSke from "../Skeleton/CollegeSke";

const CollegeList = ({ colleges: initialColleges, length }) => {
  const [colleges, setColleges] = useState(initialColleges);

  useEffect(() => {
    if (colleges.length === 0) {
      fetchColleges();
    }
  }, []);

  const fetchColleges = async () => {
    try {
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve(["SNSCE", "SNSCT", "SNSAHC", "SNSRA"]), 1000)
      );
      setColleges(response);
    } catch (error) {
      console.error("Error fetching colleges:", error);
    }
  };

  const getImageUrl = (college) => {
    switch (college) {
      case "SNSCE":
        return SNSCE;
      case "SNSCT":
        return SNSCT;
      case "SNSAHC":
        return SNSAHC;
      case "SNSRA":
        return SNSRA;
      default:
        return "default image URL";
    }
  };

  return (
    <section>
      <div className="flex flex-col items-center justify-center py-5 gap-y-2">
        <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">College</h2>
        <p className="text-lg font-medium text-slate-700/70">
          Your Future with {length} Premier Colleges
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center p-1">
        {colleges.map((college) => (
          <Link
            key={college}
            to={`/college/${encodeURIComponent(college)}`}
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
                  className="relative w-40"
                  src={getImageUrl(college)}
                  alt={college}
                />
              </div>
              <div className="relative px-6 pb-6 mt-6 text-white">
                <span className="block text-xl font-semibold text-center">
                  {college}
                </span>
              </div>
            </div>
          </Link>
        ))}
        {colleges.length === 0 &&
          Array.from({ length: length }).map((_, index) => (
            <CollegeSke key={index} />
          ))}
      </div>
    </section>
  );
};

export default CollegeList;
