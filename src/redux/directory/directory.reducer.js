const INITIAL_STATE = {
  sections: [
    {
      title: 'cookies',
      imageUrl: 'https://images.unsplash.com/photo-1590080874088-eec64895b423?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=271',
      id: 1,
      linkUrl: 'shop/cookies'
    },
    {
      title: 'pastries',
      imageUrl: 'https://images.unsplash.com/photo-1602077812176-1bd3ff433d74?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=271',
      id: 2,
      linkUrl: 'shop/pastries'
    },
    {
      title: 'brownies',
      imageUrl: 'https://images.unsplash.com/photo-1515037893149-de7f840978e2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=271',
      id: 3,
      linkUrl: 'shop/brownies'
    },
    {
      title: 'chinese new year',
      imageUrl: 'https://images.unsplash.com/photo-1517102183434-58e6be84ba50?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=490',
      size: 'large',
      id: 4,
      linkUrl: 'shop/cny'
    },
    {
      title: 'all-time-favourites',
      imageUrl: 'https://images.unsplash.com/photo-1557925923-6982bd9650ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=490',
      size: 'large',
      id: 5,
      linkUrl: 'shop/favourites'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;