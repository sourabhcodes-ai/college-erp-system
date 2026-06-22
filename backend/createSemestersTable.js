const pool = require("./config/db");

async function createSemestersTable() {

    try {

        await pool.query(`
            CREATE TABLE IF NOT EXISTS semesters (
                id VARCHAR(20) PRIMARY KEY,
                department_id VARCHAR(20) NOT NULL,
                semester_number INTEGER NOT NULL
            );
        `);

        console.log(
            "Semesters table created successfully!"
        );

    } catch (error) {

        console.error(error);
    }

    process.exit();
}

createSemestersTable();