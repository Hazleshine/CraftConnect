const express = require("express");
const { getCareerGuidanceData } = require("../controllers/careerGuidanceController");

const router = express.Router();

router.get("/:userId", getCareerGuidanceData);

module.exports = router;