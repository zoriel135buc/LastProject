import { useState, useEffect, useContext } from "react";
import { AuthContext, BASE_URL } from "../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import EmergencyButton from "./Button";
import { Button } from "@mui/material";
import { jwtDecode } from "jwt-decode";
import Loader from "./Loader";
import bgh from "../assets/bgh.jpg";

const Home = () => {
  const { setToken, token, setFirstName, setLastName, firstName, lastName } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [selectedSwitch, setSelectedSwitch] = useState(null);

  useEffect(() => {
    if (token) {
      const decode = jwtDecode(token.token);
      console.log("decode", decode);
      setLastName(decode.last_name);
      setFirstName(decode.first_name);
    }
  }, []);

  const handleEmergencyButtonClick = () => {
    switch (selectedSwitch) {
      case "Model":
        navigate("/Flow");
        break;
      case "video":
        navigate("/video");
        break;
      case "massage":
        navigate("/massage");
        break;
      case "phoneCall":
        navigate("/phoneCall");
        break;
      default:
        break;
    }
  };

  const goLogOut = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/logout`, {
        withCredentials: true,
      });

      if (response.status === 200) {
        setToken(null);
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {!imageLoaded && <Loader />}
      <div className={`home-container ${imageLoaded ? "image-loaded" : ""}`}>
        <img
          src={bgh}
          className="bg-image"
          alt="Background"
          onLoad={() => setImageLoaded(true)}
          onError={(e) => console.error("Image error:", e)}
        />
        <div className="content">
          <h1>
            hello {firstName} {lastName}
          </h1>
          <EmergencyButton
            selectedSwitch={selectedSwitch}
            onClick={handleEmergencyButtonClick}
          />
          <br />
          <Button
            style={{ margin: "50px" }}
            onClick={goLogOut}
            variant="contained"
          >
            logout
          </Button>
        </div>
      </div>
    </>
  );
};
export default Home;
