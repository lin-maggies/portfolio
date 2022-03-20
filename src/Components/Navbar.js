import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import "../App.css";
import { headerLogo, headerLogoHover } from "../assets/images";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/">
          <img
            src={headerLogo}
            className="navLogo"
            onMouseOver={(e) => (e.currentTarget.src = headerLogoHover)}
            onMouseOut={(e) => (e.currentTarget.src = headerLogo)}
          />
        </Link>
        <div className="navbarLinks">
          <ul>
            <li>
              <Link to="/about" title="About">
                About
              </Link>
              <Link to="/projects" title="Projects">
                Projects
              </Link>
              <Link to="/skills" title="Skills">
                Skills
              </Link>
              <Link to="/contact" title="Contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbarBurger">
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
              _focus={{ color: "none" }}
              _hover={{ color: "#1a27c9" }}
              _active={{ color: "none" }}
              color="#1a27c9"
              borderColor="#1a27c9"
            />
            <MenuList>
              <MenuItem>
                <Link to="/about">About</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/projects">Projects</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/skills">Skills</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/contact">Contact</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </nav>
    </div>
  );
}
