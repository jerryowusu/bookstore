const CHECK_STATUS = 'CHECK_STATUS';

const INITIAL_STATE = {
  categories: [],
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return {
        ...state,
        categories: 'under construction',
      };
    default:
      return state;
  }
};

export const setCategories = (categories) => ({
  type: CHECK_STATUS,
  payload: categories,
});

export default categoriesReducer;
