const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

export const checkStatus = ({ id }) => ({
  type: CHECK_STATUS,
  payload: id,
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
