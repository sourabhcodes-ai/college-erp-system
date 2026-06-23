const pool = require("../config/db");

const getSubjects = async (req, res) => {

    try {

        const result =
            await pool.query(
                "SELECT * FROM subjects"
            );

        res.json(result.rows);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message:
                "Error fetching subjects"
        });
    }
};

module.exports = {
    getSubjects
};