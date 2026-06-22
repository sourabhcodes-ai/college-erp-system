const pool = require("../config/db");

const getStudents = async (req, res) => {

    try {

        const result =
            await pool.query(
                "SELECT * FROM students"
            );

        res.json(result.rows);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message:
                "Error fetching students"
        });
    }
};

const getStudentById = async (req, res) => {

    try {

        const { id } = req.params;

        const result =
            await pool.query(
                `
                SELECT *
                FROM students
                WHERE id = $1
                `,
                [id]
            );

        if (
            result.rows.length === 0
        ) {
            return res.status(404).json({
                message:
                    "Student not found"
            });
        }

        res.json(
            result.rows[0]
        );

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message:
                "Error fetching student"
        });
    }
};

const addStudent = async (req, res) => {

    try {

        const {
            id,
            rollNo,
            name,
            departmentId,
            semesterId,
            sectionId
        } = req.body;

        await pool.query(
            `
            INSERT INTO students
            (
                id,
                roll_no,
                name,
                department_id,
                semester_id,
                section_id
            )
            VALUES
            ($1,$2,$3,$4,$5,$6)
            `,
            [
                id,
                rollNo,
                name,
                departmentId,
                semesterId,
                sectionId
            ]
        );

        res.status(201).json({
            message:
                "Student added successfully"
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message:
                "Error adding student"
        });
    }
};

module.exports = {
    getStudents,
    getStudentById,
    addStudent
};