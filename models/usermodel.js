const { db } = require("../config/db.js");

const register = (email, password, first_name, last_name, phone) => {
  return db("users").insert({ email, password, first_name, last_name, phone }, [
    "user_id",
    "email",
    "first_name",
    "last_name",
    "phone",
  ]);
};
const login = (email) => {
  return db("users")
    .select("user_id", "email", "password", "first_name", "last_name", "phone")
    .where({ email });
};
const allUsers = () => {
  return db("users").select(
    ` user_id`,
    ` first_name`,
    `last_name`,
    ` phone`,
    `email`,
    ` password`
  );
};
const updateUsers = (userId, newData) => {
  console.log(userId, newData);
  return db("users")
    .where({ user_id: userId })
    .update({
      email: newData.loweremail,
      password: newData.hash,
      first_name: newData.firstName,
      last_name: newData.lastName,
      phone: newData.phone,
    })
    .returning("*");
};
const deleteUser = (userId) => {
  return db(`users`).where({ user_id: userId }).delete();
};

module.exports = { register, login, allUsers, updateUsers, deleteUser };
