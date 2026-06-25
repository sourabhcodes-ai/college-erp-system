const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const studentRoutes = require("./routes/studentRoutes");
const departmentRoutes = require("./routes/departmentRoutes");
const subjectRoutes = require("./routes/subjectRoutes");
const semesterRoutes = require("./routes/semesterRoutes");
const sectionRoutes = require("./routes/sectionRoutes");
const facultyRoutes = require("./routes/facultyRoutes");
const facultyAssignmentRoutes = require("./routes/facultyAssignmentRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");
const examRoutes = require("./routes/examRoutes");
const marksRoutes = require("./routes/marksRoutes");
const resultRoutes = require("./routes/resultRoutes");
const authRoutes = require("./routes/authRoutes");

app.get("/", (req, res) => {
    res.send("College ERP Backend Running");
});

app.use("/api/students", studentRoutes);
app.use("/api/departments", departmentRoutes);
app.use("/api/subjects", subjectRoutes);
app.use("/api/semesters", semesterRoutes);
app.use("/api/sections", sectionRoutes);
app.use("/api/faculty", facultyRoutes);
app.use("/api/faculty-assignments", facultyAssignmentRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/exams", examRoutes);
app.use("/api/marks", marksRoutes);
app.use("/api/results", resultRoutes);
app.use("/api/auth", authRoutes);

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});