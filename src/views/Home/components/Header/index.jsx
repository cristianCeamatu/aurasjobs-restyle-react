import React from 'react';
import Typed from 'react-typed';
import styled from 'styled-components';
import headerBackground from './img/header2.png';

const Container = styled.div`
  padding: 100px 20px 250px;
  width: 100%;
  background-image: url(${headerBackground});
  background-repeat: no-repeat;
  background-position: 0 center;
  background-size: cover;
  text-align: center;
  @media(min-width: 960px) {
    padding: 150px 20px 330px;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 16px;
  letter-spacing: 1.6px;
  background: rgba(0, 0, 0, 0.65);
  text-shadow: 1px 1px 1px rgba(40, 40, 40, 1);
  padding: 15px;
  display: inline-block;
  box-shadow: 1px 1px 1px 0px rgba(40,40,40,0.75);
  @media(min-width: 960px) {
    font-size: 22px;
  }
`;

const Header = () => (
  <Container>
    <Title>
      <Typed
        strings={[
          'Joburi fara taxe sau comisioane',
          'Cazarea si mesele asigurate',
          'Asistenta gratuita',
          'Servicii profesionale',
        ]}
        typeSpeed={50}
        backSpeed={60}
        loop
      />
    </Title>
  </Container>
);

export default Header;
