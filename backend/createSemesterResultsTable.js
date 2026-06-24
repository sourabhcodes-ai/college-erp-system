const pool = require("./config/db");

async function createSemesterResultsTable() {

    try {

        await pool.query(`
            CREATE TABLE IF NOT EXISTS semester_results (
                student_id VARCHAR(20) NOT NULL,
                semester_id VARCHAR(20) NOT NULL,

                sgpa NUMERIC(4,2) NOT NULL,
                total_credits INTEGER NOT NULL,
                total_credit_points INTEGER NOT NULL
            );
        `);

        console.log(
            "Semester Results table created successfully!"
        );

    } catch (error) {

        console.error(error);
    }

    process.exit();
}

createSemesterResultsTable();