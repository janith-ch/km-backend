var express = require("express");
const staffController = require("../controllers/staffController");
var router = express.Router();

router.get("/list", staffController.staffList);
router.post("/create", staffController.createStaff);
router.get("/view/:staffId?", staffController.viewStaff);
router.put("/update/:staffId?", staffController.updateStaff);
router.delete("/delete/:staffId?", staffController.deleteStaff);

module.exports = router;
