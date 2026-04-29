const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema(
  {
    user: {
      // owner of this employee
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: { type: String, required: true, trim: true },
    number: { type: String, default: "" },
    salary: { type: Number, default: 0 },
    nationalID: { type: String, default: "" },
    speciality: { type: String, default: "" },
    jobDesignation: { type: String, default: "" },
    email: { type: String, default: "", lowercase: true, trim: true },
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Employee", EmployeeSchema);

