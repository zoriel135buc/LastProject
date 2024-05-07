import { useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../App";
import { BASE_URL } from "../App";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Login = ({ page }) => {
  const {
    setToken,
    message,
    setMessage,
    password,
    setPassword,
    email,
    setEmail,
    setLastName,
    setFirstName,
    setPhone,
    userId,
    setUserId,
  } = useContext(AuthContext);

  const navigate = useNavigate();

  const loginP2 = async () => {
    if (page === "Login") {
      try {
        const response = await axios.post(
          `${BASE_URL}/login`,
          {
            email,
            password,
          },
          {
            withCredentials: true,
          }
        );
        if (response.status === 200) {
          const { token, user, last_name, phone, user_id } = response.data;
          localStorage.setItem("token", token);
          localStorage.setItem("user_id", user_id);
          // console.log(response.data);
          setUserId(response.data.user_id);
          setPhone(response.data.phone);
          setToken(response.data.token);
          setFirstName(response.data.user);
          setLastName(response.data.last_name);
          setMessage("");
          navigate("/Home");
        }
      } catch (error) {
        console.log(error);
        setMessage(error.response.data.msg);
      }
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
        Login
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
      </Box>
      <Button
        onClick={loginP2}
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
      <span
        style={{
          marginTop: "20px",
          fontFamily: "Arial, sans-serif",
          fontSize: "16px",
          color: "black",
        }}
      >
        New member?{" "}
        <Link
          to={"/register"}
          style={{ textDecoration: "none", color: "#007bff" }}
        >
          Register here
        </Link>
      </span>
    </div>
  );
};
export default Login;
