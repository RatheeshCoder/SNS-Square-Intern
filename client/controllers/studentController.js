const Student = require('../models/Student');

const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getStudentsByCollege = async (req, res) => {
  const { collegeName } = req.params;
  try {
    const students = await Student.find({ collegeName: collegeName });
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getDepartmentsByCollege = async (req, res) => {
  const { collegeName } = req.params;
  try {
    const departments = await Student.find({ collegeName }).distinct('department');
    res.json(departments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getStudentsByCollegeAndDepartment = async (req, res) => {
  const { collegeName, departmentId } = req.params;
  try {
    const students = await Student.find({ collegeName, department: departmentId });
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getStudentById = async (req, res) => {
  const { collegeName, departmentName, studentId } = req.params;
  try {
    const student = await Student.findOne({ _id: studentId, collegeName, department: departmentName });
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const searchStudents = async (req, res) => {
  try {
    const { keyword } = req.query;

    // Define search criteria for college name, department, or skills
    const searchQuery = {
      $or: [
        { college: { $regex: new RegExp(keyword, 'i') } },
        { department: { $regex: new RegExp(keyword, 'i') } },
        { skills: { $regex: new RegExp(keyword, 'i') } },
        { batchNumber: parseInt(keyword) || 0 },
        { yearOfStudying: parseInt(keyword) || 0 },
        { location: { $regex: new RegExp(keyword, 'i') } },
        { GPA: parseFloat(keyword) || 0 },
      ],
    };


    // Search for students using the constructed query
    const students = await Student.find(searchQuery);
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

 const getStudentId= async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const student = await Student.findById(studentId);

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};







module.exports = { getStudents, getStudentsByCollege, getDepartmentsByCollege, getStudentsByCollegeAndDepartment , getStudentById , searchStudents , getStudentId };
