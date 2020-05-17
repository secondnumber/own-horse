let initialState = {
  pricesList: [
    {
      id: 1,
      name: 'Standard Plan',
      currency: '$',
      integer: '39',
      fraction: '99',
      period: 'per mouth',
      bgClass: 'bgcyan',
      featureOne: 'Pork Ground Found Biltong',
      featureTwo: 'Capicola Sausage Beef Ribs',
      featureThree: 'Pork Doner Frankfurter',
    },
    {
      id: 2,
      name: 'Golden Plan',
      currency: '$',
      integer: '59',
      fraction: '59',
      period: 'per mouth',
      bgClass: 'bgblue',
      featureOne: 'Pork Ground Found Biltong',
      featureTwo: 'Capicola Sausage Beef Ribs',
      featureThree: 'Pork Doner Frankfurter',
    },
    {
      id: 3,
      name: 'Platinum Plan',
      currency: '$',
      integer: '89',
      fraction: '39',
      period: 'per mouth',
      bgClass: 'bglilac',
      featureOne: 'Pork Ground Found Biltong',
      featureTwo: 'Capicola Sausage Beef Ribs',
      featureThree: 'Pork Doner Frankfurter',
    },
  ],
};

const priceListReducer = (state = initialState, action) => {
  return state;
};

export default priceListReducer;
