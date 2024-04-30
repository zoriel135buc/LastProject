import * as React from "react";
import AppBar from "@mui/material/AppBar";
import axios from "axios";
import { BASE_URL } from "../App";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { AuthContext } from "../App";
import { Fab } from "@mui/material";
// import Auth from "../auth/Auth";
// import Home from "./Home";
// import Login from "./Login";
// import Register from "./Register";
// import { Routes, Route } from "react-router-dom";

export default function MenuAppBar() {
  const { token, setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  useEffect(() => {
    if (token) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, [token]);

  const goLogOut = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/logout`, {
        withCredentials: true,
      });
      // console.log(response);
      if (response.status === 200) {
        setToken(null);
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    goLogOut();
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? "Logout" : "Login"}
        />
      </FormGroup>
      <AppBar position="fixed" sx={{ width: "100%" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            <Link
              to="/Home"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Home
            </Link>
          </Typography>
          {auth && (
            <div style={{ marginLeft: "1700px" }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <Link
                    to={"/settings"}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Settings
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link
                    to={"/MyAccount"}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    My account
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link
                    to={"/Massage"}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Massage
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link
                    to={"/About"}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    About
                  </Link>
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
