const express = require("express");
const router = express.Router();

const {
    getSemesters
} = require("../controllers/semesterController");

router.get("/", getSemesters);

module.exports = router;