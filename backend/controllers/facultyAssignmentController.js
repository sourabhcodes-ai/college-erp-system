const facultyAssignments = require("../data/facultyAssignments");

const getFacultyAssignments = (req, res) => {
    res.json(facultyAssignments);
};

module.exports = {
    getFacultyAssignments
};