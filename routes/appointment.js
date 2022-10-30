var express = require("express");
const appointmentController = require("../controllers/appointmentController");
var router = express.Router();

router.get("/list", appointmentController.appointmentsList);
router.post("/create", appointmentController.createAppointment);
router.get("/view/:doctorId?", appointmentController.viewAppointment);
router.put("/update/:doctorId?", appointmentController.updateAppointment);
router.delete("/delete/:doctorId?", appointmentController.deleteAppointment);

module.exports = router;
