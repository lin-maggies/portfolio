import React from "react";
import { Button, textDecoration } from "@chakra-ui/react";

export default function ({ children, onClick, borderColor, border }) {
  return (
    <Button
      _focus={{ color: "none" }}
      _hover={{ color: "#1a27c9", textShadow: "0 0 0.65px #1a27c9" }}
      _active={{ color: "none" }}
      onClick={onClick}
      fontWeight="light"
      bg="transparent"
      height="auto"
      color="#1a27c9"
      letterSpacing="0.1rem"
      borderColor={borderColor ? borderColor : "none"}
      border={border ? border : "none"}
    >
      {children}
    </Button>
  );
}
