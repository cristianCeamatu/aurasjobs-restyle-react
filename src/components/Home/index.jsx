import React from 'react';
import { CssBaseline } from '@material-ui/core';
import './index.css';
import Navbar from './components/Navbar';
import Header from './components/Header';

const Home = () => (
  <div>
    <CssBaseline />
    <Navbar />
    <Header />
  </div>
);

export default Home;
