const CHECK_STATUS = 'CHECK_STATUS';

export const setCategories = (categories) => ({
  type: CHECK_STATUS,
  payload: categories,
});

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'under construction';
    default:
      return state;
  }
};

export default categoriesReducer;
