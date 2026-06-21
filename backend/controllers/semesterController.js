const semesters = require("../data/semesters");

const getSemesters = (req, res) => {
    res.json(semesters);
};

module.exports = {
    getSemesters
};