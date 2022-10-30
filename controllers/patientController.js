const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  patientsList: async function (req, res) {
    try {
      const patients = await prisma.patients.findMany();
      if (patients.length) {
        return res.status(200).json(patients);
      } else {
        return res.status(200).json({ message: "no data fetch" });
      }
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  },

  createPatient: async function (req, res) {
    try {
      const patient = await prisma.patients.create({
        data: {
          name: req.body.name,
          nic: req.body.nic,
          email: req.body.email,
          check_in: req.body.check_in,
          check_out: req.body.check_out,
          room_no: req.body.room_no,
          doctor_id: req.body.doctor_id,
          contact: req.body.contact,
          status: req.body.status,
        },
      });
      return res.status(200).json({ message: "data created successfuly" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error });
    }
  },

  viewPatient: async function (req, res) {
    try {
      const patient = await prisma.patients.findFirst({
        where: {
          id: req.query.patient_id,
        },
      });
      if (patient) {
        return res.status(200).json(patient);
      } else {
        res.status(200).json({ message: "no data to fetch" });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error });
    }
  },

  updatePatient: async function (req, res) {
    try {
      const patient = await prisma.patients.update({
        where: {
          id: req.query.patient_id,
        },
        data: {
          name: req.body.name,
          nic: req.body.nic,
          email: req.body.email,
          check_in: req.body.check_in,
          check_out: req.body.check_out,
          room_no: req.body.room_no,
          doctor_id: req.body.doctor_id,
          contact: req.body.contact,
          status: req.body.status,
        },
      });
      return res.status(200).json({ message: "data updated successfuly" });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  },

  deletePatient: async function (req, res) {
    try {
      const patient = await prisma.patients.delete({
        where: {
          id: Number(req.query.patient_id),
        },
      });
      return res.status(200).json({ message: "data deleted successfuly" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error });
    }
  },
};
