import React from "react";
import { Box, Typography } from "@mui/material";
import aboutBg from "../assets/about.webp";

const About = ({ page }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${aboutBg})`,
        backgroundSize: "cover",
        height: "100vh",
        p: 4,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h1" gutterBottom>
        About the Website
      </Typography>
      <Typography variant="h2" paragraph>
        Welcome to our website! We've built this platform with the aim of
        providing support and aid for individuals experiencing anxiety attacks.
        Our website offers several features to help you during these challenging
        moments.
      </Typography>
      <Typography variant="h3" paragraph>
        Here's what you can find on our site:
      </Typography>
      <ul>
        <li>
          <Typography variant="h4">
            Leave a Message: You can leave a message for a representative who
            will provide guidance and support.
          </Typography>
        </li>
        <li>
          <Typography variant="h4">
            Anxiety Attack Video: Watch a helpful video that provides tips and
            techniques for managing anxiety attacks.
          </Typography>
        </li>
        <li>
          <Typography variant="h4">
            Body Response Model: Explore a model that illustrates what happens
            to our body during an anxiety attack, helping you understand the
            physiological aspects.
          </Typography>
        </li>
      </ul>
    </Box>
  );
};

export default About;
