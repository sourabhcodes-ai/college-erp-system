const sections = require("../data/sections");

const getSections = (req, res) => {
    res.json(sections);
};

module.exports = {
    getSections
};