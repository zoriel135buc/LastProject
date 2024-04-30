const express = require("express");
const {
  _register,
  _login,
  _allUsers,
  _logout,
  _deleteUser,
  _updateUsers,
} = require("../controllers/usersController.js");
const { verifyToken } = require("../middlewares/verifyToken.js");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const router = express.Router();
router.get("/", verifyToken, _allUsers);
router.post("/register", _register);
router.post("/login", _login);
router.get("/logout", _logout);
router.put("/update/:uid", _updateUsers);
router.delete("/delete", _deleteUser);
router.get("/verify", verifyToken, (req, res) => {
  const user_id = req.user_id;
  const useremail = req.useremail;
  const first_name = req.first_name;
  const last_name = req.last_name;
  const phone = req.phone;
  console.log("verify", user_id, useremail, first_name, last_name, phone);

  const secret = process.env.ACCESS_TOKEN_SECERT;

  const accessToken = jwt.sign(
    { user_id, useremail, last_name, first_name, phone },
    secret,
    {
      expiresIn: "60s",
    }
  );

  res.cookie("token", accessToken, {
    maxAge: 60 * 1000,
    httpOnly: true,
  });

  res.json({ token: accessToken });
});
module.exports = router;
