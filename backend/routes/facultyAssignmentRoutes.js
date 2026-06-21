const express = require("express");
const router = express.Router();

const {
    getFacultyAssignments
} = require("../controllers/facultyAssignmentController");

router.get("/", getFacultyAssignments);

module.exports = router;