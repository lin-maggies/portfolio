import React, { useState, useEffect, useContext } from 'react';
import { Text, Button, Box } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import '../App.css';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="body">
        <h1 className="pageTitle">Hi, I'm Maggie.</h1>
        <div className="pagePara">
          <p1>I'm a web developer with real life project experiences.</p1>
        </div>
      </div>
    </div>
  );
}
