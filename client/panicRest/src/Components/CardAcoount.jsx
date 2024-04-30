import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useContext, useEffect } from "react";
import { AuthContext } from "../App";
import { jwtDecode } from "jwt-decode";
import { useNavigate, Link } from "react-router-dom";
import img from "../assets/card.jpg";

export default function AccountCard() {
  const {
    lastName,
    firstName,
    phone,
    email,
    token,
    setLastName,
    setFirstName,
    setEmail,
    setPhone,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(token);
    if (token) {
      const decode = jwtDecode(token.token);
      console.log("decode", decode);
      setLastName(decode.last_name);
      setFirstName(decode.first_name);
      setEmail(decode.useremail);
      setPhone(decode.phone);
    }
  }, []);
  const goToUpdate = () => {
    navigate("/Update");
  };
  const goToMassage = () => {
    navigate("/Massage");
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        height: "100vh",
        justifyContent: "center",
      }}
    >
      <h1 style={{ margin: "20px", color: "#fff" }}>My Account</h1>
      <Card
        sx={{
          minWidth: 275,
          border: "solid 1px black",
          backgroundColor: "transparent",
        }}
      >
        <CardContent>
          <Typography variant="h2" color="text.primary" gutterBottom>
            First Name: {firstName}
          </Typography>
          <Typography
            sx={{ color: "darkblue" }}
            variant="h3"
            component="div"
            gutterBottom
          >
            Last Name: {lastName}
          </Typography>
          <Typography
            sx={{ mb: 1.5, color: "snow" }}
            color="text.secondary"
            gutterBottom
          >
            Email: {email}
          </Typography>
          <Typography variant="body2" gutterBottom sx={{ color: "blue" }}>
            Phone: {phone}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={goToUpdate}
            size="small"
            sx={{ margin: "auto", color: "white" }}
          >
            Edit Profile
          </Button>
          <Button
            onClick={goToMassage}
            size="small"
            sx={{ margin: "auto", color: "white" }}
          >
            My Massage
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
