import React, { useState, useEffect, useContext } from "react";
import { Text, Button, Box, Link } from "@chakra-ui/react";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        onClick={() => {
          navigate("/projects");
        }}
      >
        My Projects
      </Button>
      <p>blahhhhh</p>
    </div>
  );
}
