import React from 'react';
import { CssBaseline } from '@material-ui/core';
import './index.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Jobs from './components/Jobs';
import ParticleComponent from './components/Header/ParticleComponent';

const Home = () => (
  <div>
    <CssBaseline />
    <Navbar />
    <Header />
    <Jobs />
  </div>
);

export default Home;
