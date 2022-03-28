const UNDER_CONSTRUCTION = 'UNDER_CONSTRUCTION';

const INITIAL_STATE = {
  categories: [],
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UNDER_CONSTRUCTION:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};

export const setCategories = (categories) => ({
  type: UNDER_CONSTRUCTION,
  payload: categories,
});

export default categoriesReducer;
