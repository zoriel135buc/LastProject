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

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard() {
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
    // console.log(token);
    if (token) {
      const decode = jwtDecode(token.token);
      setLastName(decode.last_name);
      setFirstName(decode.first_name);
      setEmail(decode.useremail);
      setPhone(decode.phone);
    }
  }, []);
  const goToUpdate = () => {
    navigate("/Update");
  };
  return (
    <Card
      sx={{
        minWidthwidth: 275,
        border: "solid 1px black",
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 45 }} color="text.secondary" gutterBottom>
          first name:{firstName}
        </Typography>
        <Typography variant="h3" component="div">
          last name:{lastName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          email:{email}
        </Typography>
        <Typography variant="body2">phone:{phone}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={goToUpdate} size="small" sx={{ margin: "auto" }}>
          Edit Profile
        </Button>
      </CardActions>
    </Card>
  );
}
