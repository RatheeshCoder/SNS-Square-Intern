const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  college: { type: String, required: true },
  department: { type: String, required: true },
  courseName: { type: String, required: true },
  batchNumber: { type: Number, required: true },
  yearOfStudying: { type: Number, required: true },
  skills: { type: [String], required: true },
  GPA: { type: Number, required: true },
  location: { type: String, required: true },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
