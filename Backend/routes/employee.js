const express = require("express");
const { addEmployee, getEmployeesByUser, updateEmployee } = require("../controller/employeeController");
const { auth, requireAdmin } = require("../middleware/auth");

const router = express.Router();

// Add employee for a specific user (admin only)
// router.post("/add", auth, requireAdmin, addEmployee);
router.post("/add", addEmployee);
router.patch("/update/:id", updateEmployee);


// Get all employees for a specific user (admin only)
router.get("/by-user/:userId", auth, requireAdmin, getEmployeesByUser);

module.exports = router;

