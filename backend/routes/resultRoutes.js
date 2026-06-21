const {
    verifyToken
} = require("../middleware/authMiddleware");
const express = require("express");
const router = express.Router();

const {
    getResults,
    getResultsByStudent,
    getSemesterResult,
    getCGPA
} = require("../controllers/resultController");

router.get("/", getResults);

router.get(
    "/student/:studentId",
    verifyToken,
    getResultsByStudent
);

router.get(
    "/student/:studentId/cgpa",
    verifyToken,
    getCGPA
);

router.get(
    "/student/:studentId/semester/:semesterId",
    verifyToken,
    getSemesterResult
);
module.exports = router;