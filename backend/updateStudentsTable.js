const pool = require("./config/db");

async function updateStudentsTable() {

    try {

        await pool.query(`
            DROP TABLE IF EXISTS students;
        `);

        await pool.query(`
            CREATE TABLE students (
                id VARCHAR(20) PRIMARY KEY,
                roll_no VARCHAR(20) UNIQUE NOT NULL,
                name VARCHAR(100) NOT NULL,
                department_id VARCHAR(20),
                semester_id VARCHAR(20),
                section_id VARCHAR(20)
            );
        `);

        console.log(
            "Students table updated successfully!"
        );

    } catch (error) {

        console.error(error);
    }

    process.exit();
}

updateStudentsTable();