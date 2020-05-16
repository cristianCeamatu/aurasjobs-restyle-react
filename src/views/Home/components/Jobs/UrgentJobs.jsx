import React, { useContext } from 'react';
import Typed from 'react-typed';
import styled from 'styled-components';
import { UrgentJobsProvider, UrgentJobsContext } from '../../context/UrgentJobsState';
import Job from './Job';

const Wrapper = styled.section`
  margin: 60px auto;
`;

const JobsWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 14px;
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

const UrgentJobs = () => {
  const { urgentJobs } = useContext(UrgentJobsContext);

  return (
    <UrgentJobsProvider>
      <Wrapper>
        <SectionHeading>
          <Typed
            strings={[
              'Pozitii urgente',
              'Incepere imediata',
            ]}
            typeSpeed={50}
            backSpeed={60}
            loop
          />
        </SectionHeading>
        <JobsWrapper>
          {urgentJobs.map((job) => <Job key={job.id} job={job} />)}
        </JobsWrapper>
      </Wrapper>
    </UrgentJobsProvider>
  );
};

export default UrgentJobs;
