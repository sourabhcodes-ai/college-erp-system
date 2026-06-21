const express = require("express");
const router = express.Router();

const {
    getMarks
} = require("../controllers/marksController");

router.get("/", getMarks);

module.exports = router;