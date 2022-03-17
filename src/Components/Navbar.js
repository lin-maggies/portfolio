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
        <Link className="logo" to="/">
          ML
        </Link>
        <div className="navbar-links">
          <ul>
            <li>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/skills">Skills</Link>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-burger">
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
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
