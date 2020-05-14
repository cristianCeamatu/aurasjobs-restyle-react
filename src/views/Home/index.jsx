import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Header from './components/Header';
import UrgentJobs from './components/Jobs/UrgentJobs';

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
  </Wrapper>
);

export default Home;
