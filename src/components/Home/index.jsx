import React from 'react';
import { CssBaseline } from '@material-ui/core';
import './index.css';
import Navbar from './components/Navbar';

const Home = () => (
  <div>
    <CssBaseline />
    <Navbar />
    <h1>Home Bro</h1>
  </div>
);

export default Home;
