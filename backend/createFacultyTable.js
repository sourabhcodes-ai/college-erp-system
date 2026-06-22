const pool = require("./config/db");

async function createFacultyTable() {

    try {

        await pool.query(`
            CREATE TABLE IF NOT EXISTS faculty (
                id VARCHAR(20) PRIMARY KEY,
                employee_id VARCHAR(20) UNIQUE NOT NULL,
                name VARCHAR(100) NOT NULL,
                department_id VARCHAR(20),
                designation VARCHAR(100)
            );
        `);

        console.log(
            "Faculty table created successfully!"
        );

    } catch (error) {

        console.error(error);
    }

    process.exit();
}

createFacultyTable();