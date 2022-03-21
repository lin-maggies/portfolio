import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Flex,
} from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import ButtonCust from "../Components/pageElements/ButtonCust.js";

export default function ProjectModal(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [imagePage, setImagePage] = useState(0);

  const next = () => {
    if (imagePage < props.images.length - 1) {
      setImagePage(imagePage + 1);
    }
  };

  const back = () => {
    if (imagePage > 0) {
      setImagePage(imagePage - 1);
    }
  };

  const openAndReset = () => {
    onOpen(true);
    setImagePage(0);
  };

  return (
    <div>
      <ButtonCust
        onClick={openAndReset}
        children={props.children}
        border={props.border}
        borderColor={props.borderColor}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="1000px">
          <ModalHeader>{props.title}</ModalHeader>
          <ModalCloseButton
            _focus={{ color: "none" }}
            _hover={{ color: "#1a27c9" }}
            _active={{ color: "none" }}
          />
          <ModalBody justifyContent="center">
            <Flex align="center" justify="center">
              <img
                src={props.images[imagePage]}
                alt="project screenshots"
                className="projPhoto"
              />
            </Flex>
          </ModalBody>

          <ModalFooter>
            <ButtonCust onClick={back}>
              {imagePage === 0 ? null : <ArrowLeftIcon />}
            </ButtonCust>
            <ButtonCust onClick={next}>
              {imagePage === props.images.length - 1 ? null : (
                <ArrowRightIcon />
              )}
            </ButtonCust>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
