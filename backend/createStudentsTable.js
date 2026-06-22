const pool = require("./config/db");

async function createStudentsTable() {
    try {

        await pool.query(`
            CREATE TABLE IF NOT EXISTS students (
                id VARCHAR(20) PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                email VARCHAR(100) UNIQUE NOT NULL,
                department_id VARCHAR(20),
                semester_id VARCHAR(20),
                section_id VARCHAR(20)
            );
        `);

        console.log(
            "Students table created successfully!"
        );

    } catch (error) {

        console.error(error);
    }

    process.exit();
}

createStudentsTable();