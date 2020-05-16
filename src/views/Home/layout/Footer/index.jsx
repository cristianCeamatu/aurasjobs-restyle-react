import React from 'react';
import styled from 'styled-components';
import background from './img/footer.png';

const Img = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 450px;
  height: 270px;
  margin: 50px auto;
  @media(min-width: 960px) {
    width: 700px;
    height: 500px;
  }
`;

const Footer = () => (
  <Img />
);

export default Footer;
