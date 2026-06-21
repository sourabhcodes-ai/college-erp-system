const departments = require("../data/departments");

const getDepartments = (req, res) => {
    res.json(departments);
};

module.exports = {
    getDepartments
};