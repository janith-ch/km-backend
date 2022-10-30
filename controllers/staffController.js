const { PrismaClient } = require("@prisma/client");const prisma = new PrismaClient();
module.exports = {
  staffList: async function (req, res) {
    try {
      const staff = await prisma.staff.findMany();
      if (staff.length) {
        return res.status(200).json(staff);
      } else {
        return res.status(200).json({ message: "no data fetch" });
      }
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  },

  createStaff: async function (req, res) {
    try {
      const staff = await prisma.staff.create({
        data: {
          name: req.body.name,
          nic: req.body.nic,
          email: req.body.email,
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

  viewStaff: async function (req, res) {
    try {
      const staff = await prisma.staff.findFirst({
        where: {
          id: req.query.staff_id,
        },
      });
      if (staff) {
        return res.status(200).json(staff);
      } else {
        res.status(200).json({ message: "no data to fetch" });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error });
    }
  },

  updateStaff: async function (req, res) {
    try {
      const staff = await prisma.staff.update({
        where: {
          id: req.query.staff_id,
        },
        data: {
          name: req.body.name,
          nic: req.body.nic,
          email: req.body.email,
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

  deleteStaff: async function (req, res) {
    try {
      const staff = await prisma.staff.delete({
        where: {
          id: req.query.staff_id,
        },
      });
      return res.status(200).json({ message: "data deleted successfuly" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error });
    }
  },
};
