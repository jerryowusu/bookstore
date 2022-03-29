const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

export const checkStatus = ({ status }) => ({
  type: CHECK_STATUS,
  status,
});

const categoriesReducer = (state = 'Check Status', action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return action.status;
    default:
      return state;
  }
};

export default categoriesReducer;
