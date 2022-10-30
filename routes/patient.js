var express = require("express");
const patientController = require("../controllers/patientController");
var router = express.Router();

router.get("/list", patientController.patientsList);
router.post("/create", patientController.createPatient);
router.get("/view/:doctorId?", patientController.viewPatient);
router.put("/update/:doctorId?", patientController.updatePatient);
router.delete("/delete/:doctorId?", patientController.deletePatient);

module.exports = router;
