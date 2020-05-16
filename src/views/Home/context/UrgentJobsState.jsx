import React, { createContext, useReducer } from 'react';
// import Airtable from 'airtable';
import UrgentJobsReducer from './UrgentJobsReducer';

// Airtable.configure({
//   endpointUrl: 'https://api.airtable.com',
//   apiKey: 'keyuMEmAoanDg0hg8',
// });
// const base = Airtable.base('appJN1E2nRm2Lu6Pu');

const initialState = {
  urgentJobs: [
    {
      id: 'rec1IxVxXSYzBJ0zr',
      fields: {
        position: 'Waiter',
        ship: 'MS Arkona',
        flightTicket: 'Reimbursed at the end of contract',
        requirements: [
          'Conversational English',
          'Travel money to the ship',
          'Experience minimum 6 months',
        ],
        date: '2020-05-20',
        company: 'Anqor',
        field: 'River Cruises',
        salary: '€1000 - €1600',
        location: 'Europe',
      },
      createdTime: '2020-05-13T08:17:31.000Z',
    },
    {
      id: 'recrO4D1bu9KQTtY2',
      fields: {
        position: 'Dishwasher',
        ship: 'MS Bellriva',
        flightTicket: 'Paid by the company',
        requirements: [
          'No experience required',
          'Conversational English',
        ],
        date: '2020-05-21',
        company: 'River Advice',
        field: 'River Cruises',
        salary: '€1000 - €1600',
        location: 'Europe',
      },
      createdTime: '2020-05-13T08:17:31.000Z',
    },
    {
      id: 'recP98sD8XlKGUYV7',
      fields: {
        position: 'Chef de Partie',
        ship: 'MS Dutch Melody',
        flightTicket: 'Reimbursed after 3 months',
        requirements: [
          'Experience on the position',
          'Travel money to the ship',
        ],
        date: '2020-05-30',
        company: 'Cruisinc',
        field: 'River Cruises',
        salary: '€1000 - €1600',
        location: 'Europe',
      },
      createdTime: '2020-05-13T08:17:31.000Z',
    },
  ],
};

// base('Fast embarkations').select({
//   // Selecting the first 3 records in Grid view:
//   view: 'Grid view',
// }).eachPage((records, fetchNextPage) => {
//   // This function (`page`) will get called for each page of records.

//   records.forEach((record) => {
//     initialState.urgentJobs.push({
//       id: record.id,
//       ...record.fields,
//     });
//   });

//   // To fetch the next page of records, call `fetchNextPage`.
//   // If there are more records, `page` will get called again.
//   // If there are no more records, `done` will get called.
//   fetchNextPage();
// }, (err) => {
//   if (err) { console.error(err); }
// });

export const UrgentJobsContext = createContext(initialState);

export const UrgentJobsProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useReducer(UrgentJobsReducer, initialState);

  return (
    <UrgentJobsContext.Provider value={{
      urgentJobs: state.urgentJobs,
    }}
    >
      {children}
    </UrgentJobsContext.Provider>
  );
};
