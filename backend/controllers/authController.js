const users = require("../data/users");
const jwt = require("jsonwebtoken");

const login = (req, res) => {

    const { email, password } = req.body;

    const user = users.find(
        (u) =>
            u.email === email &&
            u.password === password
    );

    if (!user) {
        return res.status(401).json({
            message: "Invalid email or password"
        });
    }

    const token = jwt.sign(
        {
            userId: user.id,
            role: user.role
        },
        "erp-secret-key",
        {
            expiresIn: "1d"
        }
    );

    res.json({
        message: "Login successful",
        token,
        user: {
            id: user.id,
            email: user.email,
            role: user.role
        }
    });
};

module.exports = {
    login
};