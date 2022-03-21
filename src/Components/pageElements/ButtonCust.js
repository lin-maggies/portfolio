import React from "react";
import { Button } from "@chakra-ui/react";

export default function ButtonCust({ children, onClick, borderColor, border }) {
  return (
    <Button
      _focus={{ color: "none" }}
      _hover={{
        color: "#1a27c9",
        textShadow: "0 0 0.5px #1a27c9, 0.5px 0 0 #1a27c9;",
      }}
      _active={{ color: "none" }}
      onClick={onClick}
      fontWeight="light"
      bg="transparent"
      height="auto"
      color="#1a27c9"
      letterSpacing="0.1rem"
      borderColor={borderColor ? borderColor : "none"}
      border={border ? border : "none"}
      marginTop="1rem"
    >
      {children}
    </Button>
  );
}
