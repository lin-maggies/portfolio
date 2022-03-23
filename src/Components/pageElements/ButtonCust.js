import React from "react";
import { Button } from "@chakra-ui/react";

export default function ButtonCust(props) {
  return (
    <Button
      _focus={{ color: "none" }}
      _hover={{
        color: "#1a27c9",
        textShadow: "0 0 0.5px #1a27c9, 0.5px 0 0 #1a27c9;",
      }}
      _active={{ color: "none" }}
      onClick={props.onClick}
      fontWeight="light"
      bg="transparent"
      height="auto"
      color="#1a27c9"
      letterSpacing="0.1rem"
      borderColor={props.borderColor ? props.borderColor : "none"}
      border={props.border ? props.border : "none"}
      marginTop="1rem"
      paddingX={props.paddingX ? props.paddingX : "1rem"}
      type={props.type ? props.type : "none"}
    >
      {props.children}
    </Button>
  );
}
