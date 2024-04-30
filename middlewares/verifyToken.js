const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const verifyToken = (req, res, next) => {
  const accessToken = req.cookies.token;
  console.log("accessToken=>", accessToken);
  if (!accessToken) return res.status(401).json({ msg: "unauthorized" });
  jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECERT, (err, decode) => {
    if (err) return res.status(403).json({ msg: "forbidden" });

    req.user_id = decode.user_id;
    req.useremail = decode.useremail;
    req.first_name = decode.first_name;
    req.last_name = decode.last_name;
    req.phone = decode.phone;

    next();
  });
};
module.exports = { verifyToken };
