const subjects = require("../data/subjects");

const getSubjects = (req, res) => {
    res.json(subjects);
};

module.exports = {
    getSubjects
};