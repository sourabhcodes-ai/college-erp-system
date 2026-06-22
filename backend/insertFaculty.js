const pool = require("./config/db");
const faculty = require("./data/faculty");

async function insertFaculty() {

    try {

        for (const teacher of faculty) {

            await pool.query(
                `
                INSERT INTO faculty
                (
                    id,
                    employee_id,
                    name,
                    department_id,
                    designation
                )
                VALUES
                ($1,$2,$3,$4,$5)
                `,
                [
                    teacher.id,
                    teacher.employeeId,
                    teacher.name,
                    teacher.departmentId,
                    teacher.designation
                ]
            );
        }

        console.log(
            "Faculty inserted successfully!"
        );

    } catch (error) {

        console.error(error);
    }

    process.exit();
}

insertFaculty();