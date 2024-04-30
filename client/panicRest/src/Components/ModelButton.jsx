import React from "react";
import ReactFlow from "reactflow";
import { Box } from "@mui/material";
import modelBg from "../assets/mode.jpeg";
import modbg from "../assets/mod.jpeg";

export default function Flow() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${modbg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${modelBg})`,
            backgroundSize: "auto", // Change backgroundSize to "auto"
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
          }}
        >
          {/* Your content here */}
        </Box>
      </div>
    </>
  );
}
