const marks = require("../data/marks");

const getMarks = (req, res) => {
    res.json(marks);
};

const addMarks = (req, res) => {

    const newMark = req.body;

    marks.push(newMark);

    res.status(201).json({
        message: "Marks added successfully",
        data: newMark
    });
};

module.exports = {
    getMarks,
    addMarks
};