const INITIAL_STATE = {
  categories: [],
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UNDER CONSTRUCTION':
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};

// action creators
// export const underConstruction = (payload) => ({});

export default categoriesReducer;
