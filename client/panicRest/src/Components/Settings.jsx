import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import { useContext } from "react";
import { AuthContext } from "../App";
import img from "../assets/settings2.avif";

const label = { inputProps: { "aria-label": "Switch demo" } };

const Settings = () => {
  const { setSelectedSwitch, selectedSwitch } = useContext(AuthContext);

  const handleSwitchChange = (switchName) => () => {
    setSelectedSwitch(switchName);
  };

  return (
    <div
      className="settings"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        paddingTop: "40px",
        justifyContent: "space-between",
      }}
    >
      <h1 style={{ marginBottom: "-10px", marginTop: "50px" }}>settings</h1>
      <h2 style={{ marginBottom: "-10px" }}>
        Choose one of the following options
      </h2>

      <div style={{ marginBottom: "10px" }}>
        Model
        <Switch
          {...label}
          checked={selectedSwitch === "Model"}
          onChange={handleSwitchChange("Model")}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        video
        <Switch
          {...label}
          checked={selectedSwitch === "video"}
          onChange={handleSwitchChange("video")}
        />
      </div>
      <div style={{ marginBottom: "300px" }}>
        massage
        <Switch
          {...label}
          checked={selectedSwitch === "massage"}
          onChange={handleSwitchChange("massage")}
        />
      </div>
    </div>
  );
};

export default Settings;
