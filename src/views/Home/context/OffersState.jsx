import React, { createContext, useReducer } from 'react';
// import Airtable from 'airtable';
import OffersReducer from './OffersReducer';

// Airtable.configure({
//   endpointUrl: 'https://api.airtable.com',
//   apiKey: 'keyuMEmAoanDg0hg8',
// });
// // eslint-disable-next-line no-unused-vars
// const base = Airtable.base('appJN1E2nRm2Lu6Pu');

const initialState = {
  offers: [
    {
      id: 'recrO4D1bu9KQT123',
      fields: {
        company: 'Cruisinc Creative Catering',
        field: 'River Cruises',
        details: 'Recrutam tot timpul anului, sezonul tine din Martie pana in Ianuarie in fiecare an, interviuri live, Skype sau telefonice.',
      },
      createdTime: '2020-05-13T08:17:31.000Z',
    },
    {
      id: 'recrO4D1bu9KQT567',
      fields: {
        company: 'River Advice Cruises',
        field: 'River Cruises',
        details: 'Recrutam tot timpul anului, sezonul tine din Martie pana in Ianuarie in fiecare an. Interviuri live sau pe Skype.',
      },
      createdTime: '2020-05-13T08:17:31.000Z',
    },
    {
      id: 'recrO4D1bu9KQT789',
      fields: {
        company: 'Anqor River Cruises',
        field: 'River Cruises',
        details: 'Recrutam tot timpul anului, sezonul tine din Martie pana in Ianuarie in fiecare an. Interviuri live sau pe Skype.',
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
//     initialState.jobs.push({
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

export const OffersContext = createContext(initialState);

export const OffersProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useReducer(OffersReducer, initialState);

  return (
    <OffersContext.Provider value={{
      offers: state.offers,
    }}
    >
      {children}
    </OffersContext.Provider>
  );
};
