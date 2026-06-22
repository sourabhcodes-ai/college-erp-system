const pool = require("../config/db");

const getDepartments = async (req, res) => {

    try {

        const result =
            await pool.query(
                "SELECT * FROM departments"
            );

        res.json(result.rows);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message:
                "Error fetching departments"
        });
    }
};

module.exports = {
    getDepartments
};