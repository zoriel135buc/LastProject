import * as React from "react";
import Switch from "@mui/material/Switch";
import { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function BasicSwitches() {
  const [activeSwitch, setActiveSwitch] = useState(null);
  const navigate = useNavigate();

  const handleSwitchChange = (switchName) => (event) => {
    setActiveSwitch(switchName);
  };

  const handleButtonClick = () => {
    // Navigate based on the active switch
    switch (activeSwitch) {
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

  return (
    <div>
      <div>
        Model
        <Switch
          {...label}
          checked={activeSwitch === "Model"}
          onChange={handleSwitchChange("Model")}
        />
      </div>
      <div>
        video
        <Switch
          {...label}
          checked={activeSwitch === "video"}
          onChange={handleSwitchChange("video")}
        />
      </div>
      <div>
        massage
        <Switch
          {...label}
          checked={activeSwitch === "massage"}
          onChange={handleSwitchChange("massage")}
        />
      </div>
      <div>
        phoneCall
        <Switch
          {...label}
          checked={activeSwitch === "phoneCall"}
          onChange={handleSwitchChange("phoneCall")}
        />
      </div>
      <Button onClick={handleButtonClick} variant="contained">
        Go
      </Button>
    </div>
  );
}
