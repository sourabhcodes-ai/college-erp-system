const pool = require("../config/db");

const getMarks = async (req, res) => {

    try {

        const result =
            await pool.query(
                "SELECT * FROM marks"
            );

        res.json(result.rows);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Error fetching marks"
        });
    }
};

const addMarks = async (req, res) => {

    try {

        const {
            id,
            studentId,
            subjectId,
            semesterId,
            subjectType,
            academicYear,
            midSemMarks,
            internal2Marks,
            attendanceMarks,
            theoryMarks,
            practicalMarks,
            vivaMarks,
            internalMarks
        } = req.body;

        await pool.query(
            `
            INSERT INTO marks
            (
                id,
                student_id,
                subject_id,
                semester_id,
                subject_type,
                academic_year,
                mid_sem_marks,
                internal2_marks,
                attendance_marks,
                theory_marks,
                practical_marks,
                viva_marks,
                internal_marks
            )
            VALUES
            (
                $1,$2,$3,$4,
                $5,$6,$7,$8,$9,
                $10,$11,$12,$13
            )
            `,
            [
                id,
                studentId,
                subjectId,
                semesterId,
                subjectType,
                academicYear,
                midSemMarks,
                internal2Marks,
                attendanceMarks,
                theoryMarks,
                practicalMarks,
                vivaMarks,
                internalMarks
            ]
        );

        res.status(201).json({
            message: "Marks added successfully"
        });

    } catch (error) {

        console.error("POST MARKS ERROR:");
        console.error(error);

        res.status(500).json({
            message: error.message,
            detail: error.detail || null,
            code: error.code || null
        });
    }
};

module.exports = {
    getMarks,
    addMarks
};