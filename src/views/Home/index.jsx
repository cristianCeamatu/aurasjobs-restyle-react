import React from 'react';
import styled from 'styled-components';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Header from './components/Header';
import UrgentJobs from './components/Jobs/UrgentJobs';
import Offers from './components/Offers';
import './index.css';

const Wrapper = styled.section`
  width: 100%;
  max-width: 1368px;
  margin: 0 auto;
`;

const Home = () => (
  <Wrapper>
    <Navbar />
    <Header />
    <UrgentJobs />
    <Offers />
    <Footer />
  </Wrapper>
);

export default Home;
