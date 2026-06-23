const pool = require("./config/db");
const sections = require("./data/sections");

async function insertSections() {

    try {

        for (const section of sections) {

            await pool.query(
                `
                INSERT INTO sections
                (
                    id,
                    department_id,
                    semester_id,
                    section_name
                )
                VALUES
                ($1,$2,$3,$4)
                `,
                [
                    section.id,
                    section.departmentId,
                    section.semesterId,
                    section.sectionName
                ]
            );
        }

        console.log(
            "Sections inserted successfully!"
        );

    } catch (error) {

        console.error(error);
    }

    process.exit();
}

insertSections();