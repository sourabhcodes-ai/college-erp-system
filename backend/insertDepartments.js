const pool = require("./config/db");
const departments = require("./data/departments");

async function insertDepartments() {

    try {

        for (const department of departments) {

            await pool.query(
                `
                INSERT INTO departments
                (
                    id,
                    name,
                    total_semesters
                )
                VALUES
                ($1,$2,$3)
                `,
                [
                    department.id,
                    department.name,
                    department.totalSemesters
                ]
            );
        }

        console.log(
            "Departments inserted successfully!"
        );

    } catch (error) {

        console.error(error);
    }

    process.exit();
}

insertDepartments();