const pool = require("./config/db");
const students = require("./data/students");

async function insertStudents() {

    try {

        for (const student of students) {

            await pool.query(
                `
                INSERT INTO students
                (
                    id,
                    roll_no,
                    name,
                    department_id,
                    semester_id,
                    section_id
                )
                VALUES
                ($1,$2,$3,$4,$5,$6)
                `,
                [
                    student.id,
                    student.rollNo,
                    student.name,
                    student.departmentId,
                    student.semesterId,
                    student.sectionId
                ]
            );
        }

        console.log(
            "Students inserted successfully!"
        );

    } catch (error) {

        console.error(error);
    }

    process.exit();
}

insertStudents();