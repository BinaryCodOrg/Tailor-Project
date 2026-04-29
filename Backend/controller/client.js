const Client = require("../model/client");
const User = require("../model/user");
const { createClientSchema } = require("../schema/client");

const addClient = async (req, res) => {
  try {
    const payload = {
      ...req.body,
      user: req.user.userId,
    };

    const { error } = createClientSchema.validate(payload);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const client = await Client.create(payload);

    // optional: link to user
    await User.findByIdAndUpdate(req.user.userId, {
      $push: { clients: client._id },
    });

    res.status(201).json(client);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getClients = async (req, res) => {
  try {
    const clients = await Client.find({ user: req.user.userId });
    res.status(200).json(clients);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateClient = async (req, res) => {
  try {
    const clientId = req.params.id;

    if (req.body.user) delete req.body.user;

    const { error } = createClientSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const client = await Client.findOneAndUpdate(
      { _id: clientId, user: req.user.userId },
      { $set: req.body },
      { new: true },
    );

    if (!client) {
      return res
        .status(404)
        .json({ error: "Client not found or unauthorized" });
    }

    res.status(200).json(client);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteClient = async (req, res) => {
  try {
    const clientId = req.params.id;

    const client = await Client.findOne({
      _id: clientId,
      user: req.user.userId,
    });

    if (!client) {
      return res
        .status(404)
        .json({ error: "Client not found or unauthorized" });
    }

    await Client.findByIdAndDelete(clientId);

    await User.findByIdAndUpdate(req.user.userId, {
      $pull: { clients: clientId },
    });

    res.status(200).json({ message: "Client deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  addClient,
  getClients,
  updateClient,
  deleteClient,
};
