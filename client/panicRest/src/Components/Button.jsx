import React from "react";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
const EmergencyButton = ({ selectedSwitch }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigate based on the selected switch
    switch (selectedSwitch) {
      case "Model":
        history.push("/model");
        break;
      case "video":
        history.push("/video");
        break;
      case "massage":
        history.push("/massage");
        break;
      case "phoneCall":
        history.push("/phoneCall");
        break;
      default:
        history.push("/Choice");
        break;
    }
  };
  const buttonStyle = {
    width: "300px",
    height: "300px",
    backgroundColor: "red",
    color: "white",
    fontSize: "2rem",
    borderRadius: "50%",
    "&:hover": {
      backgroundColor: "darkred",
    },
  };
  const press = () => {
    navigate("/Choice");
  };

  return (
    <Button onClick={press} variant="contained" sx={buttonStyle}>
      <Typography variant="h3">Press</Typography>
    </Button>
  );
};

export default EmergencyButton;
