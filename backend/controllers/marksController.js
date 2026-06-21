const marks = require("../data/marks");

const getMarks = (req, res) => {
    res.json(marks);
};

module.exports = {
    getMarks
};
