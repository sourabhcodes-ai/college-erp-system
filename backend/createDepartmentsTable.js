const pool = require("./config/db");

async function createDepartmentsTable() {

    try {

        await pool.query(`
            CREATE TABLE IF NOT EXISTS departments (
                id VARCHAR(20) PRIMARY KEY,
                name VARCHAR(150) NOT NULL,
                total_semesters INTEGER NOT NULL
            );
        `);

        console.log(
            "Departments table created successfully!"
        );

    } catch (error) {

        console.error(error);
    }

    process.exit();
}

createDepartmentsTable();