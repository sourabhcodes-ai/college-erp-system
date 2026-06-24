const pool = require("./config/db");

async function createAttendanceTable() {

    try {

        await pool.query(`
            CREATE TABLE IF NOT EXISTS attendance (
                id VARCHAR(20) PRIMARY KEY,
                student_id VARCHAR(20) NOT NULL,
                section_id VARCHAR(20) NOT NULL,
                subject_id VARCHAR(20) NOT NULL,
                faculty_id VARCHAR(20) NOT NULL,
                attendance_date DATE NOT NULL,
                status VARCHAR(20) NOT NULL
            );
        `);

        console.log(
            "Attendance table created successfully!"
        );

    } catch (error) {

        console.error(error);
    }

    process.exit();
}

createAttendanceTable();