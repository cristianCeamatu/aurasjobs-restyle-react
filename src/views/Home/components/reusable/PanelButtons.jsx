import React from 'react';
import { Phone, TouchApp, Facebook } from '@material-ui/icons';
import styled from 'styled-components';

const PanelButtons = () => (
  <Wrapper>
    <ActionButton>
      <TouchApp fontSize="inherit" />
      {' '}
      Aplica
    </ActionButton>
    <ActionButton>
      <Phone fontSize="inherit" />
      {' '}
      Suna
    </ActionButton>
    <ActionButton>
      <Facebook fontSize="inherit" />
      {' '}
      Distribuie
    </ActionButton>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  font-size: 12px;
`;

const ActionButton = styled.button`
  margin-top: 16px;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 2px;
  border: 1px solid #5D692C;
  color: #ffffff;
  font-weight: bold;
  background: rgba(93, 105, 44, 1);
  &:hover {
    cursor: pointer;
    background: rgba(93, 105, 44, 0.9);
  }
  &:not(:last-child) {
    margin-right: 8px;
  }
`;

export default PanelButtons;
