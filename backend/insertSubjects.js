const pool = require("./config/db");
const subjects = require("./data/subjects");

async function insertSubjects() {

    try {

        for (const subject of subjects) {

            await pool.query(
                `
                INSERT INTO subjects
                (
                    id,
                    name,
                    department_id,
                    semester_id,
                    subject_type,
                    credits
                )
                VALUES
                ($1,$2,$3,$4,$5,$6)
                `,
                [
                    subject.id,
                    subject.name,
                    subject.departmentId,
                    subject.semesterId,
                    subject.subjectType,
                    subject.credits
                ]
            );
        }

        console.log(
            "Subjects inserted successfully!"
        );

    } catch (error) {

        console.error(error);
    }

    process.exit();
}

insertSubjects();