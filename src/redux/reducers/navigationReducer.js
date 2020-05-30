let initialState = {
  navMenuItems: [
    { id: 1, menuItem: 'Homepage', menuLink: 'home' },
    { id: 2, menuItem: 'Pages', menuLink: 'pages' },
    { id: 3, menuItem: 'Gallery', menuLink: 'gallery' },
    { id: 4, menuItem: 'Games', menuLink: 'games' },
    { id: 5, menuItem: 'Blog', menuLink: 'blog' },
    { id: 6, menuItem: 'Contacts', menuLink: 'contacts' },
  ],
};

const navigationReducer = (state = initialState, action) => {
  return state;
};

export default navigationReducer;
