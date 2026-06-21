const exams = require("../data/exams");

const getExams = (req, res) => {
    res.json(exams);
};

module.exports = {
    getExams
};