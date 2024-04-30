import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../App";
import Video from "./Video.jsx";
import Flow from "./ModelButton.jsx";
import Massage from "./Massage";
import PhoneCall from "./PhoneCall.jsx";
import choice from "../assets/choice.jpg";

const Choice = ({ page }) => {
  const { selectedSwitch } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(selectedSwitch);
  const videoButton = () => {
    navigate("/video");
  };
  const MassageButton = () => {
    navigate("/Massage");
  };

  const ModelButton = () => {
    navigate("/Flow");
  };
  return (
    <>
      {selectedSwitch === "model" ? (
        <Flow />
      ) : selectedSwitch === "video" ? (
        <Video />
      ) : selectedSwitch === "massage" ? (
        <Massage />
      ) : selectedSwitch === "phoneCall" ? (
        <PhoneCall />
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundImage: `url(${choice})`,
            backgroundSize: "cover",
            height: "100vh",
            justifyContent: "center",
          }}
        >
          {" "}
          <Box>
            <Button onClick={videoButton} variant="contained">
              video
            </Button>
            <Button
              onClick={MassageButton}
              variant="contained"
              sx={{ marginLeft: "10px" }}
            >
              Massage
            </Button>
            <Button
              onClick={ModelButton}
              variant="contained"
              sx={{ marginLeft: "10px" }}
            >
              Model
            </Button>
          </Box>
        </div>
      )}
    </>
  );
};
export default Choice;
