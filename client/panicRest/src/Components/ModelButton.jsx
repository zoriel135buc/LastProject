import React from "react";
import ReactFlow from "reactflow";
import { Box } from "@mui/material";

import "reactflow/dist/style.css";

const initialNodes = [
  {
    id: "1",
    type: "input",
    data: {
      label: (
        <p>
          <h3>TRIGGER</h3> <p>Physical sensations of anxiety response</p>{" "}
        </p>
      ),
    },
    position: { x: 350, y: 70 },
    style: {
      background: "red",
      color: "black",
      height: "125px",
      width: "150px",
    },
  },

  {
    id: "2",
    position: { x: 350, y: 250 },
    data: {
      label: (
        <p>
          <h3>THOUGHTS-IMAGES</h3>i`m having a heart attack
        </p>
      ),
    },
    style: {
      background: "yellow",
      color: "black",
      height: "125px",
      width: "150px",
    },
  },
  {
    id: "3",
    position: { x: 500, y: 400 },
    data: {
      label: (
        <p>
          <h3>FEELINGS </h3>
          Anxiety,terror physical sesations of adrenaline response
        </p>
      ),
    },
    style: {
      background: "red",
      color: "black",
      height: "125px",
      width: "150px",
    },
  },
  {
    id: "4",
    position: { x: 350, y: 550 },
    data: {
      label: (
        <p>
          <h3>THOUGHTS-IMAGES</h3>that confirms it-I really am dying!
        </p>
      ),
    },
    style: {
      background: "yellow",
      color: "black",
      height: "125px",
      width: "150px",
    },
  },
  {
    id: "5",
    position: { x: 150, y: 400 },
    data: {
      label: (
        <p>
          <h3>BEHAVIOUR</h3>Escape the situation Avoid future trigger
        </p>
      ),
    },
    style: {
      background: "yellow",
      color: "black",
      height: "125px",
      width: "150px",
    },
  },
];
const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3" },
  { id: "e3-4", source: "3", target: "4" },
  { id: "e2-5", source: "2", target: "5" },
  { id: "e5-4", source: "5", target: "4" },
];

export default function Flow() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <ReactFlow nodes={initialNodes} edges={initialEdges} />
    </Box>
  );
}
