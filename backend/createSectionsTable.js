const pool = require("./config/db");

async function createSectionsTable() {

    try {

        await pool.query(`
            CREATE TABLE IF NOT EXISTS sections (
                id VARCHAR(20) PRIMARY KEY,
                department_id VARCHAR(20) NOT NULL,
                semester_id VARCHAR(20) NOT NULL,
                section_name VARCHAR(10) NOT NULL
            );
        `);

        console.log(
            "Sections table created successfully!"
        );

    } catch (error) {

        console.error(error);
    }

    process.exit();
}

createSectionsTable();