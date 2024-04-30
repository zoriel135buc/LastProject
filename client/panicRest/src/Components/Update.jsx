import { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../App";
import { BASE_URL } from "../App";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Update = ({ page }) => {
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
    userId,
    setUserId,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(userId);

  const fetchUpdate = async () => {
    try {
      if (page === "Update") {
        const response = await axios.put(
          `${BASE_URL}/update/${userId}`,
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
          console.log("response", response);
          navigate("/Login");
        }
      }
    } catch (error) {
      console.log(error);
      setMessage(error.response.data.msg);
    }
  };

  return (
    <div>
      <h2>{page}</h2>
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
      <Button onClick={fetchUpdate} variant="contained">
        {page}
      </Button>
      <div>{message}</div>
    </div>
  );
};

export default Update;
