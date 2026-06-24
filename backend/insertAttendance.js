const pool = require("./config/db");
const attendance = require("./data/attendance");

async function insertAttendance() {

    try {

        for (const record of attendance) {

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
                    record.id,
                    record.studentId,
                    record.sectionId,
                    record.subjectId,
                    record.facultyId,
                    record.date,
                    record.status
                ]
            );
        }

        console.log(
            "Attendance inserted successfully!"
        );

    } catch (error) {

        console.error(error);
    }

    process.exit();
}

insertAttendance();