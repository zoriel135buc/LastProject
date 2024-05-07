import { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../App";
import { BASE_URL } from "../App";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Register = ({ page }) => {
  const {
    setToken,
    message,
    setMessage,
    password,
    setPassword,
    email,
    setEmail,
    lastName,
    setLastName,
    firstName,
    setFirstName,
    phone,
    setPhone,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  const fetchRegister = async () => {
    try {
      if (page === "Register") {
        const response = await axios.post(
          `${BASE_URL}/register`,
          {
            email,
            password,
            firstName,
            lastName,
            phone,
          },
          {
            withCredentials: true,
          }
        );
        if (response.status === 200) {
          console.log("response", response.data);
          setToken(response.data);
          setMessage("");
          navigate("/login");
        }
      }
    } catch (error) {
      console.log(error);
      setMessage(error.response.data.msg);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "100px",
        justifyContent: "center",
        placeItems: "center",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontFamily: "Arial, sans-serif",
          fontSize: "24px",
          marginBottom: "20px",
        }}
      >
        Register
      </h2>
      <Box component={"form"} sx={{ m: 1 }} autoComplete="off">
        <TextField
          sx={{ m: 1 }}
          id="email"
          type="email"
          label="Enter your email"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          sx={{ m: 1 }}
          id="password"
          type="password"
          label="Enter your password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          sx={{ m: 1 }}
          id="phone"
          type="text"
          label="Enter your phone"
          variant="outlined"
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextField
          sx={{ m: 1 }}
          id="first_name"
          type="text"
          label="Enter your first name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          sx={{ m: 1 }}
          id="last_name"
          type="text"
          label="Enter your last name"
          onChange={(e) => setLastName(e.target.value)}
        />
      </Box>
      <Button
        onClick={fetchRegister}
        variant="contained"
        style={{ marginTop: "20px" }}
      >
        {page}
      </Button>
      <div
        style={{
          marginTop: "10px",
          fontFamily: "Arial, sans-serif",
          fontSize: "14px",
        }}
      >
        {message}
      </div>
    </div>
  );
};

export default Register;
