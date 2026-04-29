const express = require("express");
const router = express.Router();

const {
  addClient,
  getClients,
  updateClient,
  deleteClient,
} = require("../controller/client");

const {requireAdmin} = require("../middleware/auth");

// CRUD Routes
router.post("/add", requireAdmin, addClient);
router.get("/getAll", requireAdmin, getClients);
router.patch("/update/:id", requireAdmin, updateClient);
router.delete("/delete/:id", requireAdmin, deleteClient);

module.exports = router;