var express = require("express");
var router = express.Router();

router.use("/doctor", require("./doctors"));
router.use("/patient", require("./patient"));
router.use("/staff", require("./staff"));
router.use("/appointment", require("./appointment"));

module.exports = router;
