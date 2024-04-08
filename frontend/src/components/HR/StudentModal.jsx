import React from "react";
import Modal from "react-modal";
import ModelSk from "../Skeleton/ModelSk";
import profile from "../../assets/profile.png";

const StudentModal = ({
  isOpen,
  onRequestClose,
  selectedStudent,
  closeModal,
  loading,
}) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      {loading
        ? Array.from({ length: selectedStudent ? 1 : 4 }).map((_, index) => (
            <ModelSk key={index} />
          ))
        : selectedStudent && (
            <div className="flex flex-col justify-center h-screen">
              <div className="relative flex flex-col max-w-xs p-3 mx-auto space-y-3 bg-white border border-white shadow-lg md:flex-row md:space-x-5 md:space-y-0 rounded-xl md:max-w-3xl">
                <div className="grid w-full bg-white md:w-1/3 place-items-center">
                  <img
                    src={profile}
                    alt="student image"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col w-full p-3 space-y-2 bg-white md:w-2/3">
                  <h2 className="text-xl font-black text-gray-800 md:text-3xl">
                    {selectedStudent.studentName}
                  </h2>
                  <p className="font-medium text-gray-500">
                    Batch Number: {selectedStudent.batchNumber}
                  </p>
                  <p className="font-medium text-gray-500">
                    Skills: {selectedStudent.skills.join(", ")}
                  </p>
                  <p className="font-medium text-gray-500">
                    College Name: {selectedStudent.collegeName}
                  </p>
                  <p className="font-medium text-gray-500">
                    Department: {selectedStudent.department}
                  </p>
                  <p className="font-medium text-gray-500">
                    Course Name: {selectedStudent.courseName}
                  </p>
                  <p className="font-medium text-gray-500">
                    Year of Studying: {selectedStudent.yearOfStudying}
                  </p>
                  <p className="font-medium text-gray-500">
                    GPA: {selectedStudent.GPA}
                  </p>
                  <p className="font-medium text-gray-500">
                    Location: {selectedStudent.location}
                  </p>
                  <div className="flex justify-end">
                    <button
                      className="px-4 py-2 font-bold text-white bg-[#f68523] rounded hover:bg-[#111827]"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
    </Modal>
  );
};

export default StudentModal;
