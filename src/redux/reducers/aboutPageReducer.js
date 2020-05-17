import React from 'react';

let initialState = {
  aboutItems: [
    {
      id: 1,
      number: 12,
      title: 'games Experience',
      subtitle: 'Years in',
      text: 'Text',
    },
  ],
  achievementsItems: [{ id: 1 }, { id: 2 }],
};

const aboutPageReducer = (state = initialState, action) => {
  return state;
};

export default aboutPageReducer;
