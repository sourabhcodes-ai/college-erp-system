const pool = require("../config/db");

const getSemesters = async (req, res) => {

    try {

        const result =
            await pool.query(
                "SELECT * FROM semesters"
            );

        res.json(result.rows);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message:
                "Error fetching semesters"
        });
    }
};

module.exports = {
    getSemesters
};