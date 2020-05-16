import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.section`

`;

const Offer = ({ offer }) => {
  const { company, field, details } = offer;

  return (
    <Wrapper>
      Oferte companii
    </Wrapper>
  );
};

Offer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  offer: PropTypes.object.isRequired,
}

export default Offer;
