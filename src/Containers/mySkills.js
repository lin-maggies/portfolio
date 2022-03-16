import React, { useState, useEffect, useContext } from 'react';
import { Text, Button, Box, Link } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import '../App.css';
import Navbar from '../Components/Navbar';

export default function MySkills() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="body">
        <h1 className="pageTitle">What I can do</h1>
      </div>
    </div>
  );
}
