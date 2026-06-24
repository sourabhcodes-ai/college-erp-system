const pool = require("./config/db");
const semesterResults = require("./data/semesterResults");

async function insertSemesterResults() {

    try {

        for (const result of semesterResults) {

            await pool.query(
                `
                INSERT INTO semester_results
                (
                    student_id,
                    semester_id,
                    sgpa,
                    total_credits,
                    total_credit_points
                )
                VALUES
                ($1,$2,$3,$4,$5)
                `,
                [
                    result.studentId,
                    result.semesterId,
                    result.sgpa,
                    result.totalCredits,
                    result.totalCreditPoints
                ]
            );
        }

        console.log(
            "Semester Results inserted successfully!"
        );

    } catch (error) {

        console.error(error);
    }

    process.exit();
}

insertSemesterResults();