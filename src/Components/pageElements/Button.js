import React from "react";
import { Button } from "@chakra-ui/react";

export default function ({ children, onClick, borderColor, border }) {
  return (
    <Button
      _focus={{ color: "none" }}
      _hover={{ color: "#1a27c9" }}
      _active={{ color: "none" }}
      onClick={onClick}
      bg="transparent"
      height="auto"
      color="#1a27c9"
      borderColor={borderColor ? borderColor : "none"}
      border={border ? border : "none"}
    >
      {children}
    </Button>
  );
}
