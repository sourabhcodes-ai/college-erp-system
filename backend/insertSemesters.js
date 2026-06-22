const pool = require("./config/db");
const semesters = require("./data/semesters");

async function insertSemesters() {

    try {

        for (const semester of semesters) {

            await pool.query(
                `
                INSERT INTO semesters
                (
                    id,
                    department_id,
                    semester_number
                )
                VALUES
                ($1,$2,$3)
                `,
                [
                    semester.id,
                    semester.departmentId,
                    semester.semesterNumber
                ]
            );
        }

        console.log(
            "Semesters inserted successfully!"
        );

    } catch (error) {

        console.error(error);
    }

    process.exit();
}

insertSemesters();