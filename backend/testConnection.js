const pool = require("./config/db");

async function testConnection() {

    try {

        const result =
            await pool.query(
                "SELECT NOW()"
            );

        console.log(
            "Database Connected!"
        );

        console.log(result.rows);

    } catch (error) {

        console.error(error);
    }
}

testConnection();