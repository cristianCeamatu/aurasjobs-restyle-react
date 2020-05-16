import React, { useContext } from 'react';
import styled from 'styled-components';
import Typed from 'react-typed';
import { OffersContext, OffersProvider } from '../../context/OffersState';
import Offer from './Offer';

const Wrapper = styled.section`
    margin: 60px auto;
    text-align: center;
  `;

const OffersWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 16px;
    @media(min-width: 630px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media(min-width: 960px) {
      grid-template-columns: repeat(3, 1fr);
    }
  `;

const SectionHeading = styled.h3`
    text-align: center;
    margin-bottom: 30px;
    font-size: 24px;
  `;

const Offers = () => {
  const { offers } = useContext(OffersContext);

  return (
    <OffersProvider>
      <Wrapper>
        <SectionHeading>
          <Typed
            strings={[
              'Partenerii nostrii',
              'Oferte actualizate',
            ]}
            typeSpeed={50}
            backSpeed={60}
            loop
          />
        </SectionHeading>
        <OffersWrapper>
          {offers.map((offer) => <Offer key={offer.id} offer={offer.fields} />)}
        </OffersWrapper>
      </Wrapper>
    </OffersProvider>
  );
};

export default Offers;
