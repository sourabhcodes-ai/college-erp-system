const pool = require("../config/db");

const getAttendance = async (req, res) => {

    try {

        const result =
            await pool.query(
                "SELECT * FROM attendance"
            );

        res.json(result.rows);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Error fetching attendance"
        });
    }
};

const getAttendanceByStudent = async (req, res) => {

    try {

        const { studentId } = req.params;

        const result =
            await pool.query(
                `
                SELECT *
                FROM attendance
                WHERE student_id = $1
                `,
                [studentId]
            );

        res.json(result.rows);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Error fetching student attendance"
        });
    }
};

const getAttendanceBySection = async (req, res) => {

    try {

        const { sectionId } = req.params;

        const result =
            await pool.query(
                `
                SELECT *
                FROM attendance
                WHERE section_id = $1
                `,
                [sectionId]
            );

        res.json(result.rows);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Error fetching section attendance"
        });
    }
};

const markAttendance = async (req, res) => {

    try {

        const {
            id,
            studentId,
            sectionId,
            subjectId,
            facultyId,
            date,
            status
        } = req.body;

        await pool.query(
            `
            INSERT INTO attendance
            (
                id,
                student_id,
                section_id,
                subject_id,
                faculty_id,
                attendance_date,
                status
            )
            VALUES
            ($1,$2,$3,$4,$5,$6,$7)
            `,
            [
                id,
                studentId,
                sectionId,
                subjectId,
                facultyId,
                date,
                status
            ]
        );

        res.status(201).json({
            message: "Attendance marked successfully"
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    getAttendance,
    getAttendanceByStudent,
    getAttendanceBySection,
    markAttendance
};