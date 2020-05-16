let initialState = {
  navMenuItems: [
    { id: 1, menuItem: 'Homepage' },
    { id: 2, menuItem: 'Pages' },
    { id: 3, menuItem: 'Gallery' },
    { id: 4, menuItem: 'Games' },
    { id: 5, menuItem: 'Blog' },
    { id: 6, menuItem: 'Contacts' },
  ],
};

const headerReducer = (state = initialState, action) => {
  return state;
};

export default headerReducer;
