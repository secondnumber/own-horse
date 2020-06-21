let initialState = {
  navMenuItems: [
    { id: 1, menuItem: 'Homepage', menuLink: '' },
    {
      id: 2,
      menuItem: 'Pages',
      menuLink: 'pages',
      nestedMenu: [
        { id: 1, nestedMenuItem: 'About', nestedMenuLink: 'about' },
        { id: 2, nestedMenuItem: 'Faq', nestedMenuLink: 'faq' },
        { id: 3, nestedMenuItem: 'Team', nestedMenuLink: 'team' },
        { id: 4, nestedMenuItem: 'Pricing plans', nestedMenuLink: 'price' },
        { id: 5, nestedMenuItem: 'Testimonials', nestedMenuLink: 'testimonials' },
        { id: 6, nestedMenuItem: 'Statistic', nestedMenuLink: 'statistic' },
      ],
    },
    { id: 3, menuItem: 'Gallery', menuLink: 'gallery' },
    { id: 4, menuItem: 'Games', menuLink: 'games', },
    { id: 5, menuItem: 'Blog', menuLink: 'blog' },
    { id: 6, menuItem: 'Contacts', menuLink: 'contacts' },
  ],
};

const navigationReducer = (state = initialState, action) => {
  return state;
};

export default navigationReducer;
