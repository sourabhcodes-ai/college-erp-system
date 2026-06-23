const pool = require("./config/db");

async function createSubjectsTable() {

    try {

        await pool.query(`
            CREATE TABLE IF NOT EXISTS subjects (
                id VARCHAR(20) PRIMARY KEY,
                name VARCHAR(150) NOT NULL,
                department_id VARCHAR(20) NOT NULL,
                semester_id VARCHAR(20) NOT NULL,
                subject_type VARCHAR(20) NOT NULL,
                credits INTEGER NOT NULL
            );
        `);

        console.log(
            "Subjects table created successfully!"
        );

    } catch (error) {

        console.error(error);
    }

    process.exit();
}

createSubjectsTable();