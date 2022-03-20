import React, { useState, useEffect, useContext } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

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
      <Button onClick={openAndReset}>
        Click to see more images of website
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="1000px">
          <ModalHeader>{props.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <img
              src={props.images[imagePage]}
              alt="project screenshots"
              className="projPhoto"
            />
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={back}>
              <ArrowLeftIcon />
            </Button>
            <Button variant="ghost" onClick={next}>
              <ArrowRightIcon />
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
