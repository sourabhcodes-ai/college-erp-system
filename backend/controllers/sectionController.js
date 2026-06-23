const pool = require("../config/db");

const getSections = async (req, res) => {

    try {

        const result =
            await pool.query(
                "SELECT * FROM sections"
            );

        res.json(result.rows);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message:
                "Error fetching sections"
        });
    }
};

module.exports = {
    getSections
};