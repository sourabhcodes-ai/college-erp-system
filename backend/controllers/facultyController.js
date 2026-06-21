const faculty = require("../data/faculty");

const getFaculty = (req, res) => {
    res.json(faculty);
};

module.exports = {
    getFaculty
};