import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const CategoriesPage = () => {
  const status = useSelector((store) => store.categories);

  const dispatch = useDispatch();

  return (
    <div>
      Categories Page
      <br />
      <button
        type="button"
        className="categories-btn"
        onClick={() => {
          dispatch(checkStatus('Under Construction, See you soon'));
        }}
      >
        Check status
      </button>
      {status}
    </div>

  );
};

export default CategoriesPage;
