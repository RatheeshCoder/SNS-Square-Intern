const express = require('express');
const router = express.Router();
const { getStudents, getStudentsByCollege, getDepartmentsByCollege, getStudentsByCollegeAndDepartment , getStudentById , searchStudents , getStudentId } = require('../controllers/studentController');

router.get('/students', getStudents);

router.get('/students/college/:collegeName', getStudentsByCollege);

router.get('/students/college/:collegeName/department', getDepartmentsByCollege);


router.get('/students/:collegeName/:departmentId', getStudentsByCollegeAndDepartment);

router.get('/students/:collegeName/:departmentName/:studentId', getStudentById);

router.get('/search', searchStudents);

router.get('/students/:studentId', getStudentId);


module.exports = router;
