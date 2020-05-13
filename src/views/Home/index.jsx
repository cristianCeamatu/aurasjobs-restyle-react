import React from 'react';
import { CssBaseline } from '@material-ui/core';
import './index.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import UrgentJobs from './components/Jobs/UrgentJobs';

const Home = () => (
  <div className="mainContainer">
    <CssBaseline />
    <Navbar />
    <Header />
    <UrgentJobs />
  </div>
);

export default Home;
