const express = require("express");
const router = express.Router();

const {
    getSections
} = require("../controllers/sectionController");

router.get("/", getSections);

module.exports = router;