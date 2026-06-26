const express = require("express");

const router = express.Router();

const {
    getAdminStats
} = require(
    "../controllers/dashboardController"
);

const {
    verifyToken
} = require(
    "../middleware/authMiddleware"
);

const {
    allowRoles
} = require(
    "../middleware/roleMiddleware"
);

router.get(
    "/admin",
    verifyToken,
    allowRoles("ADMIN"),
    getAdminStats
);

module.exports = router;