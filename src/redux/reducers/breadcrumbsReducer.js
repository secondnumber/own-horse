let initialState = {
  crumbsList: [
    { id: 1, name: 'Home', link: '#' },
    { id: 2, name: 'Pages', link: '#' },
    { id: 3, name: 'About', link: '#' },
  ],
};

const breadcrumbsReducer = (state = initialState, action) => {
  return state;
};

export default breadcrumbsReducer;
