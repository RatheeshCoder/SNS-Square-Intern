import { TbAppsFilled } from "react-icons/tb";
import { HiAcademicCap } from "react-icons/hi";
import { RiUserFill } from "react-icons/ri";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { MdExitToApp } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav
      className={`sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900 }`}
    >
      <div className="text-xl text-gray-100">
        <div className="p-2.5 mt-1 flex items-center">
          <TbAppsFilled className="text-4xl text-white cursor-pointer top-5 left-4" />
        </div>
        <div className="my-2 bg-gray-600 h-[1px]"></div>
      </div>
      <Link
        to="/"
        className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-[#f68523] text-white"
      >
        <HiAcademicCap />
        <span className="text-[15px] ml-4 text-gray-200 font-bold">HR</span>
      </Link>
      <Link
        to="/students"
        className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-[#f68523] text-white"
      >
        <RiUserFill />
        <span className="text-[15px] ml-4 text-gray-200 font-bold">
          Student
        </span>
      </Link>
      <Link
        to="/hod"
        className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-[#f68523] text-white"
      >
        <BsFillPersonVcardFill />
        <span className="text-[15px] ml-4 text-gray-200 font-bold">HOD</span>
      </Link>
      <div className="my-4 bg-gray-600 h-[1px]"></div>
      <Link className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-[#f68523] text-white">
        <MdExitToApp />
        <span className="text-[15px] ml-4 text-gray-200 font-bold">Logout</span>
      </Link>
    </nav>
  );
};

export default Sidebar;
