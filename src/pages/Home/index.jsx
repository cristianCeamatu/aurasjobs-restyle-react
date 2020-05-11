import React from 'react';
import { CssBaseline } from '@material-ui/core';
import './index.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';

const Home = () => (
  <div>
    <CssBaseline />
    <Navbar />
    <Header />
    <About />
  </div>
);

export default Home;
