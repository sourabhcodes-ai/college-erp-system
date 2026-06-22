const pool = require("../config/db");

const getFaculty = async (req, res) => {

    try {

        const result =
            await pool.query(
                "SELECT * FROM faculty"
            );

        res.json(result.rows);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message:
                "Error fetching faculty"
        });
    }
};

module.exports = {
    getFaculty
};