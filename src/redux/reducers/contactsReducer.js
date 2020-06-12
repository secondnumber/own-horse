import React from 'react';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

let initialState = {
    header: 'Contact Information',
    description: 'Pastrami tail landjaeger porchetta short ribs ham hock, bresaola kevin leberkas. Tenderloin ground round rump swine hamburger. Cupim jerky beef ribs tongue t-bone.',
    contactsItems: [
        {
            id: 1,
            name: 'Phone Number',
            value: '0-800-123-4567 (OPERATOR)',
            icon: faCoffee,
        },
        {
            id: 2,
            name: 'Location Address',
            value: '698 KATRINE CROSSROAD APT. 325, MIAMI, USA',
            icon: 'Years in',
        },
        {
            id: 3,
            name: 'E-mail Address',
            value: 'GAMESPLAY@EXAMPLE.COM',
            icon: 'Years in',
        },
    ],
};

const aboutPageReducer = (state = initialState, action) => {
    return state;
};

export default aboutPageReducer;
