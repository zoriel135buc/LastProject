const {
  getAllMassages,
  getMassageById,
  postMassage,
  deleteMassage,
  updateMassage,
} = require("../models/massageModels.js");

const _getAllMassages = async (req, res) => {
  try {
    const data = await getAllMassages();
    res.json(data);
  } catch (err) {
    res.status(404).json({ massage: "not found" });
  }
};

const _getMassageById = async (req, res) => {
  try {
    const { uid } = req.params;
    const data = await getMassageById(uid);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(404).json({ massage: "not found" });
  }
};
const _postMassage = async (req, res) => {
  try {
    const { uid } = req.params;
    const { massage_text } = req.body;
    if (!massage_text || !uid) {
      console.log(massage_text);
      return res
        .status(400)
        .json({ error: "The message and user ID are required" });
    } else {
      const newUser = await postMassage(uid, massage_text);
      res.status(201).json(newUser);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
const _deleteMassage = async (req, res) => {
  try {
    const userId = req.params.userId;
    const massageId = req.params.massageId;
    await deleteMassage(userId, massageId);
    res.status(200).json({ message: "Massage deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const _updateMassage = async (req, res) => {
  try {
    const userId = req.params.uid;
    const { massage_text } = req.body;
    const newData = { massage_text };
    const updatedUser = await updateMassage(userId, newData);
    res
      .status(200)
      .json({ message: "massage updated successfully", user: updatedUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  _getAllMassages,
  _getMassageById,
  _postMassage,
  _deleteMassage,
  _updateMassage,
};
