const express = require("express");
const router = express.Router();

const {
    getAttendance,
    getAttendanceByStudent,
    getAttendanceBySection,
    markAttendance
} = require("../controllers/attendanceController");

const {
    verifyToken
} = require("../middleware/authMiddleware");

const {
    allowRoles
} = require("../middleware/roleMiddleware");

router.get("/", getAttendance);

router.get(
    "/student/:studentId",
    getAttendanceByStudent
);

router.get(
    "/section/:sectionId",
    getAttendanceBySection
);

router.post(
    "/",
    verifyToken,
    allowRoles("ADMIN", "FACULTY"),
    markAttendance
);

module.exports = router;