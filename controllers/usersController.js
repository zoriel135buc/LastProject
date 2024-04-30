const {
  register,
  login,
  allUsers,
  updateUsers,
  deleteUser,
} = require("../models/usermodel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const _allUsers = async (req, res) => {
  try {
    console.log(req);
    const users = await allUsers();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(404).json({ msg: "not found!!!" });
  }
};
const _login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await login(email.toLowerCase());
    console.log(user);

    // check if user exist in users table
    if (user.length === 0)
      return res.status(404).json({ msg: "email not found" });

    // check password
    const match = bcrypt.compareSync(password + "", user[0].password);
    console.log(match);
    if (!match) return res.status(404).json({ msg: "wrong password" });

    // token
    const {
      user_id,
      email: useremail,
      first_name,
      last_name,
      phone,
      user_Id,
    } = user[0];

    const secret = process.env.ACCESS_TOKEN_SECERT;

    const accessToken = jwt.sign(
      { user_id, useremail, first_name, last_name, phone },
      secret,
      {
        expiresIn: "1h",
      }
    );
    res.cookie("token", accessToken, {
      maxAge: 60 * 60 * 1000,
      httpOnly: true,
    });

    // update the user table with this token

    res.json({
      token: accessToken,
      user: first_name,
      last_name,
      phone,
      user_id,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ msg: "somthing went wrong!!!" });
  }
};
const _updateUsers = async (req, res) => {
  try {
    const userId = req.params.uid;
    const { email, password, firstName, lastName, phone } = req.body;
    console.log(req.body);
    const loweremail = email.toLowerCase();
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password + "", salt);
    const newData = { loweremail, hash, firstName, lastName, phone };
    const updatedUser = await updateUsers(userId, newData);
    res
      .status(200)
      .json({ message: "User updated successfully", user: updatedUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const _register = async (req, res) => {
  console.log("req.body", req.body);
  const { email, password, firstName, lastName, phone } = req.body;
  const loweremail = email.toLowerCase();
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password + "", salt);
  try {
    const user = await register(loweremail, hash, firstName, lastName, phone);
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(404).json({ msg: "email exist" });
  }
};
const _logout = (req, res) => {
  // delete cookie from table
  res.clearCookie("token");
  req.userid = null;
  req.useremail = null;
  req.userFirstName = null;
  req.userLastName = null;

  res.sendStatus(200);
};
const _deleteUser = async (req, res) => {
  try {
    const userId = req.params.uid;
    await deleteUser(userId);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  _allUsers,
  _login,
  _logout,
  _register,
  _deleteUser,
  _updateUsers,
};
