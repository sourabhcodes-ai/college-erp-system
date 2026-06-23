const pool = require("./config/db");

async function createMarksTable() {

    try {

        await pool.query(`
            CREATE TABLE IF NOT EXISTS marks (
                id VARCHAR(20) PRIMARY KEY,

                student_id VARCHAR(20) NOT NULL,
                subject_id VARCHAR(20) NOT NULL,
                semester_id VARCHAR(20) NOT NULL,

                subject_type VARCHAR(20) NOT NULL,
                academic_year VARCHAR(20) NOT NULL,

                mid_sem_marks INTEGER,
                internal2_marks INTEGER,
                attendance_marks INTEGER,

                theory_marks INTEGER,

                practical_marks INTEGER,
                viva_marks INTEGER,
                internal_marks INTEGER
            );
        `);

        console.log(
            "Marks table created successfully!"
        );

    } catch (error) {

        console.error(error);
    }

    process.exit();
}

createMarksTable();