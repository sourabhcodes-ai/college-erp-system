const express = require("express");
const router = express.Router();

const {
    getAttendance,
    getAttendanceByStudent,
    getAttendanceBySection,
    markAttendance
} = require("../controllers/attendanceController");

router.get("/", getAttendance);

router.get("/student/:studentId", getAttendanceByStudent);

router.get("/section/:sectionId", getAttendanceBySection);

router.post("/", markAttendance);

module.exports = router;