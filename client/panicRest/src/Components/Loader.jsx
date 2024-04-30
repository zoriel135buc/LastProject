// Loader.jsx
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <CircularProgress />
        <Typography variant="h6" component="div" style={{ marginTop: "16px" }}>
          Loading...
        </Typography>
      </div>
    </div>
  );
};

export default Loader;
