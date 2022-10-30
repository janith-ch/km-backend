const { PrismaClient } = require("@prisma/client");const prisma = new PrismaClient();

module.exports = {
  appointmentsList: async function (req, res) {
    try {
      const appointment = await prisma.appointment.findMany();
      if (appointment.length) {
        return res.status(200).json(appointment);
      } else {
        return res.status(200).json({ message: "no data fetch" });
      }
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  },

  createAppointment: async function (req, res) {
    try {
      const appointment = await prisma.appointment.create({
        data: {
          date: req.body.date,
          type: req.body.type,
          disease: req.body.disease,
          patient_id: req.body.patient_id,
          doctor_id: req.body.doctor_id,
          room_no: req.body.room_no,
          doctor_id: req.body.doctor_id,
        },
      });
      return res.status(200).json({ message: "data created successfuly" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error });
    }
  },

  viewAppointment: async function (req, res) {
    try {
      const appointment = await prisma.appointment.findFirst({
        where: {
          id: req.query.appointment_id,
        },
        include: {
          patient: true,
          doctor:true,
        }
      });
      if (appointment) {
        return res.status(200).json(appointment);
      } else {
        res.status(200).json({ message: "no data to fetch" });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error });
    }
  },

  updateAppointment: async function (req, res) {
    try {
      const appointment = await prisma.appointment.update({
        where: {
          id: req.query.appointment_id,
        },
        data: {
          date: req.body.date,
          type: req.body.type,
          disease: req.body.disease,
          patient_id: req.body.patient_id,
          doctor_id: req.body.doctor_id,
          room_no: req.body.room_no,
          doctor_id: req.body.doctor_id,
        },
      });
      return res.status(200).json({ message: "data updated successfuly" });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  },

  deleteAppointment: async function (req, res) {
    try {
      const appointment = await prisma.appointment.delete({
        where: {
          id: req.query.appointment_id,
        },
      });
      return res.status(200).json({ message: "data deleted successfuly" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error });
    }
  },
};
