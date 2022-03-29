import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories);

  return (
    <button
      type="button"
      className="categories-btn"
      onClick={() => {
        dispatch(checkStatus('Under Construction, Will be back soon 🙂'));
      }}

    >
      {status}
    </button>
  );
};

export default CategoriesPage;
