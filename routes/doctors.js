var express = require("express");const doctorController = require("../controllers/doctorController");
var router = express.Router();

router.get("/list", doctorController.doctorsList);
router.post("/create", doctorController.createDoctor);
router.get("/view/:doctorId?",doctorController.viewDoctor );
router.put("/update/:doctorId?",doctorController.updateDoctor );
router.delete("/delete/:doctorId?", doctorController.deleteDoctor);

module.exports = router;
