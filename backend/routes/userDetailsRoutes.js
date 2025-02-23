const express = require("express");
const { saveUserDetails } = require("../controllers/userDetailsController");

const router = express.Router();

router.post("/save-details", saveUserDetails);

module.exports = router;