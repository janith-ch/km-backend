const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  doctorsList: async function (req, res) {
    try {
      const doctors = await prisma.doctors.findMany();
      if (doctors.length) {
        return res.status(200).json(doctors);
      } else {
        return res.status(200).json({ message: "no data fetch" });
      }
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  },

  createDoctor: async function (req, res) {
    try {
      const doc = await prisma.doctors.create({
        data: {
          name: req.body.name,
          nic: req.body.nic,
          email: req.body.email,
          specialist: req.body.specialist,
          contact: req.body.contact,
          date_joined: req.body.date_joined,
          status: req.body.status,
        },
      });
      return res.status(200).json({ message: "data created successfuly" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error });
    }
  },

  viewDoctor: async function (req, res) {
    try {
      const doc = await prisma.doctors.findFirst({
        where: {
          id: req.query.doctor_id,
        },
        include: {
          staff: true,
        },
      });
      if (doc) {
        return res.status(200).json(doc);
      } else {
        res.status(200).json({ message: "no data to fetch" });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error });
    }
  },

  updateDoctor: async function (req, res) {
    try {
      const doc = await prisma.doctors.update({
        where: {
          id: req.query.doctor_id,
        },
        data: {
          name: req.body.name,
          nic: req.body.nic,
          email: req.body.email,
          specialist: req.body.specialist,
          contact: req.body.contact,
          date_joined: req.body.date_joined,
          status: req.body.status,
        },
      });
      return res.status(200).json({ message: "data updated successfuly" });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  },

  deleteDoctor: async function (req, res) {
    try {
      const patient = await prisma.doctors.delete({
        where: {
          id: req.query.doctor_id,
        },
      });
      return res.status(200).json({ message: "data deleted successfuly" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error });
    }
  },
};
