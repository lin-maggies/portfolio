import React from "react";
import { Button } from "@chakra-ui/react";

export default function ({ children, onClick }) {
  return (
    <Button
      _focus={{ color: "none" }}
      _hover={{ color: "#1a27c9" }}
      _active={{ color: "none" }}
      onClick={onClick}
      bg="transparent"
    >
      {children}
    </Button>
  );
}
