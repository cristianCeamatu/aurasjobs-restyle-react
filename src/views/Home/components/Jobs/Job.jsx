import React from 'react';
import PropTypes from 'prop-types';
import {
  FlightTakeoff,
  LocationOn,
  DoneAll,
} from '@material-ui/icons';
import styled from 'styled-components';
import PanelButtons from '../reusable/PanelButtons';
import image from './img/anqor-logo.jpg';

const Job = ({ job }) => {
  const {
    date,
    company,
    salary,
    field,
    location,
    flightTicket,
    position,
    requirements,
  } = job.fields;

  return (
    <Wrapper>
      <LogoWrapper>
        <Logo src={image} alt={`${company} logo`} />
        <ul>
          <li>{salary}</li>
          <JobField>{field}</JobField>
        </ul>
      </LogoWrapper>
      <JobTitle>{position}</JobTitle>
      <JobStartingDate>
        {`Starting: ${date}`}
      </JobStartingDate>
      <Paragraphs>
        <LocationOn fontSize="inherit" />
        {` Locatie: ${location}`}
      </Paragraphs>
      <Paragraphs>
        <FlightTakeoff fontSize="inherit" />
        {` Tansport: ${flightTicket}`}
      </Paragraphs>
      <RequirementsWrapper>
        <Paragraphs>
          <DoneAll fontSize="inherit" />
          {' '}
          Cerinte:
        </Paragraphs>
        <Requirements>
          {requirements.map((requirement, i) => (<li key={i}>{requirement}</li>))}
        </Requirements>
      </RequirementsWrapper>
      <PanelButtons />
    </Wrapper>
  );
};

Job.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  job: PropTypes.object.isRequired,
};

const Wrapper = styled.div`
  width: 80%;
  min-width: 300px;
  margin: 0 auto;
  border-bottom: 1px solid #CBD69D;
  padding: 20px;
  font-size: 12px;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

const JobField = styled.li`
  background-color: #CBD69D;
  padding: 2px 5px;
  margin-top: 8px;
`;

const JobTitle = styled.h3`
  font-size: 15px;
`;

const JobStartingDate = styled.p`
  font-weight: bold;  
  color: #EAAD59;
  margin-bottom: 8px;
`;

const RequirementsWrapper = styled.div`
  display: flex;
`;

const Requirements = styled.ul`
  margin-left: 25px;
  & li::before {
  content: '\\2713';
  color: #5D692C;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
  margin-right: 5px;
  }
`;

const Paragraphs = styled.p`
  line-height: 1.5;
  margin-bottom: 6px;
`;

export default Job;
