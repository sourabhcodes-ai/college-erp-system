const express = require("express");
const router = express.Router();

const {
    getMarks,
    getMarksByStudent,
    addMarks
} = require("../controllers/marksController");

const {
    verifyToken
} = require("../middleware/authMiddleware");

const {
    allowRoles
} = require("../middleware/roleMiddleware");

router.get("/", getMarks);

router.get(
    "/student/:studentId",
    verifyToken,
    getMarksByStudent
);

router.post(
    "/",
    verifyToken,
    allowRoles("ADMIN", "FACULTY"),
    addMarks
);

module.exports = router;