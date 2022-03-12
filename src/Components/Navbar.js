import React, { useState, useEffect, useContext } from "react";
import {
  Text,
  Button,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "../App.css";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar">
        <div className="header-title">Maggie Lin's Portfolio</div>
        <div className="navbar-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
              <Link to="/about">About Me</Link>
              <Link to="/projects">My Projects</Link>
              <Link to="/skills">My Skills</Link>
              <Link to="/contact">Contact Me</Link>
            </li>
          </ul>
        </div>
        <Menu className="navbar-burger">
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            <MenuItem>
              <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/about">About Me</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/projects">My Projects</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/skills">My Skills</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/contact">Contact Me</Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </nav>
    </div>
  );
}
