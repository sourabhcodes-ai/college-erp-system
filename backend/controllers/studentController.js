const students = require("../data/students");

const getStudents = (req, res) => {
    res.json(students);
};

const getStudentById = (req, res) => {
    const id = parseInt(req.params.id);

    const student = students.find(
        (student) => student.id === id
    );

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.json(student);
};

const addStudent = (req, res) => {
    const newStudent = req.body;

    students.push(newStudent);

    res.json({
        message: "Student added successfully",
        student: newStudent
    });
};

module.exports = {
    getStudents,
    getStudentById,
    addStudent
};