const pool = require("./config/db");
const marks = require("./data/marks");

async function insertMarks() {

    try {

        for (const mark of marks) {

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
                    $5,$6,
                    $7,$8,$9,
                    $10,
                    $11,$12,$13
                )
                `,
                [
                    mark.id,
                    mark.studentId,
                    mark.subjectId,
                    mark.semesterId,

                    mark.subjectType,
                    mark.academicYear,

                    mark.midSemMarks || null,
                    mark.internal2Marks || null,
                    mark.attendanceMarks || null,

                    mark.theoryMarks || null,

                    mark.practicalMarks || null,
                    mark.vivaMarks || null,
                    mark.internalMarks || null
                ]
            );
        }

        console.log(
            "Marks inserted successfully!"
        );

    } catch (error) {

        console.error(error);
    }

    process.exit();
}

insertMarks();