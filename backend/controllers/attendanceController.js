const attendance = require("../data/attendance");

const getAttendance = (req, res) => {
    res.json(attendance);
};

const getAttendanceByStudent = (req, res) => {
    const studentId = req.params.studentId;

    const studentAttendance = attendance.filter(
        (record) => record.studentId === studentId
    );

    res.json(studentAttendance);
};

const getAttendanceBySection = (req, res) => {
    const sectionId = req.params.sectionId;

    const sectionAttendance = attendance.filter(
        (record) => record.sectionId === sectionId
    );

    res.json(sectionAttendance);
};

const markAttendance = (req, res) => {
    const attendanceRecord = req.body;

    attendance.push(attendanceRecord);

    res.json({
        message: "Attendance marked successfully",
        attendance: attendanceRecord
    });
};

module.exports = {
    getAttendance,
    getAttendanceByStudent,
    getAttendanceBySection,
    markAttendance
};