const { db } = require("../config/db.js");

const getAllMassages = () => {
  return db(` massage`).select(` massage_id `, ` user_id`, ` massage_text`);
};
const getMassageById = (UsersId) => {
  return db(`massage`).select(`*`).where({ user_id: UsersId });
};
const postMassage = (userId, massageText) => {
  return db("massage")
    .insert({ user_id: userId, massage_text: massageText })
    .returning("*");
};

const updateMassage = (userId, newData) => {
  return db("massage")
    .where({ user_id: userId })
    .update(newData)
    .returning("*");
};

const deleteMassage = (userId, massageId) => {
  return db(`massage`)
    .where({ user_id: userId, massage_id: massageId })
    .delete();
};
module.exports = {
  getAllMassages,
  getMassageById,
  postMassage,
  deleteMassage,
  updateMassage,
};
