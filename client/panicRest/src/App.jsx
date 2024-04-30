import { useState, createContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";
import About from "./Components/About.jsx";
import Massage from "./Components/Massage.jsx";
import Auth from "./auth/Auth";
import Update from "./Components/Update.jsx";
import MyAccount from "./Components/MyAccount.jsx";
import MenuAppBar from "./Components/Navbar.jsx";
import "./App.css";
import PostMassage from "./Components/AddMassage.jsx";
import Video from "./Components/Video.jsx";
import Choice from "./Components/Choice.jsx";
import Flow from "./Components/ModelButton.jsx";
import Settings from "./Components/Settings.jsx";
import ErrorBoundary from "./Components/ErrorBoundary.jsx";

export const BASE_URL = "https://lastproject-iyl7.onrender.com/users";
export const BASE_URL_MESS = "https://lastproject-iyl7.onrender.com/massage";
export const AuthContext = createContext();

function App() {
  const [token, setToken] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [userId, setUserId] = useState("");
  const [selectedSwitch, setSelectedSwitch] = useState("Model");

  return (
    <>
      <ErrorBoundary>
        <AuthContext.Provider
          value={{
            token,
            setToken,
            email,
            setEmail,
            password,
            setPassword,
            message,
            setMessage,
            lastName,
            setLastName,
            firstName,
            setFirstName,
            phone,
            setPhone,
            userId,
            setUserId,
            selectedSwitch,
            setSelectedSwitch,
          }}
        >
          <MenuAppBar />
          <Routes>
            <Route
              path="/Home"
              element={
                <Auth>
                  <Home />
                </Auth>
              }
            />
            <Route path="/login" element={<Login page="Login" />} />
            <Route path="/register" element={<Register page="Register" />} />

            <Route
              path="/MyAccount"
              element={
                <Auth>
                  <MyAccount page="MyAccount" />
                </Auth>
              }
            />
            <Route
              path="/settings"
              element={
                <Auth>
                  <Settings />
                </Auth>
              }
            />
            <Route
              path="/Massage"
              element={
                <Auth>
                  <Massage page={"Massage"} />
                </Auth>
              }
            ></Route>
            <Route
              path="/About"
              element={
                <Auth>
                  <About page={"About"} />
                </Auth>
              }
            ></Route>
            <Route
              path="/Update"
              element={
                <Auth>
                  <Update page={"Update"} />
                </Auth>
              }
            ></Route>
            <Route
              path="/PostMassage"
              element={
                <Auth>
                  <PostMassage page={"PostMassage"} />
                </Auth>
              }
            ></Route>
            <Route
              path="/Video"
              element={
                <Auth>
                  <Video page={"Video"} />
                </Auth>
              }
            ></Route>
            <Route
              path="/Choice"
              element={
                <Auth>
                  <Choice page={"Choice"} />
                </Auth>
              }
            ></Route>
            <Route
              path="/Flow"
              element={
                <Auth>
                  <Flow page={"Flow"} />
                </Auth>
              }
            ></Route>
          </Routes>
        </AuthContext.Provider>
      </ErrorBoundary>
    </>
  );
}

export default App;
