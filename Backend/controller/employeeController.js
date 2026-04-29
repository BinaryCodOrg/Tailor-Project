const Employee = require("../model/employee");
const User = require("../model/user");
const employeeSchema = require("../schema/employee");

// POST /api/employee/add
const addEmployee = async (req, res) => {
  console.log("employee: ", req.body)
  req.body = {
  ...req.body,
  user: req.user.userId,
};
  const { error } = employeeSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const { user: userId } = req.body;

  try {
    const owner = await User.findById(userId);
    if (!owner) {
      return res.status(404).json({ error: "Owner user not found" });
    }

    const employee = new Employee(req.body);
    await employee.save();

    // push employee reference into user.employees
    owner.employees.push(employee._id);
    await owner.save();

    res.status(201).json(employee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const employeeId = req.params.id;

    // ❌ prevent user field override
    if (req.body.user) {
      delete req.body.user;
    }
  req.body = {
  ...req.body,
  user: req.user.userId}
    // ✅ validate (optional: partial validation schema)
    const { error } = employeeSchema.validate(req.body, { allowUnknown: true });
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // ✅ find employee that belongs to logged-in user
    const employee = await Employee.findOneAndUpdate(
      { _id: employeeId, user: req.user.userId },
      { $set: req.body },
      { new: true }
    );

    if (!employee) {
      return res.status(404).json({ error: "Employee not found or unauthorized" });
    }

    res.status(200).json(employee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /api/employee/by-user/:userId
const getEmployeesByUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const employees = await Employee.find({ user: userId });
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  addEmployee,
  getEmployeesByUser,
  updateEmployee
};

