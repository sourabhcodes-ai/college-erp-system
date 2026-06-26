const pool = require("../config/db");

const getAdminStats = async (req, res) => {

    try {

        const students =
            await pool.query(
                "SELECT COUNT(*) FROM students"
            );

        const faculty =
            await pool.query(
                "SELECT COUNT(*) FROM faculty"
            );

        const departments =
            await pool.query(
                "SELECT COUNT(*) FROM departments"
            );

        const subjects =
            await pool.query(
                "SELECT COUNT(*) FROM subjects"
            );

        const attendance =
            await pool.query(
                "SELECT COUNT(*) FROM attendance"
            );

        const marks =
            await pool.query(
                "SELECT COUNT(*) FROM marks"
            );

        const results =
            await pool.query(
                "SELECT COUNT(*) FROM semester_results"
            );

        res.json({
            students:
                students.rows[0].count,

            faculty:
                faculty.rows[0].count,

            departments:
                departments.rows[0].count,

            subjects:
                subjects.rows[0].count,

            attendance:
                attendance.rows[0].count,

            marks:
                marks.rows[0].count,

            results:
                results.rows[0].count
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message:
                "Error fetching dashboard statistics"
        });
    }
};

module.exports = {
    getAdminStats
};