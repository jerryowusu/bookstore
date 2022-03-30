import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Page = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories);

  return (
    <button
      type="button"
      className="categories-btn"
      onClick={() => {
        dispatch(checkStatus('Under Construction, See you soon'));
      }}
    >
      {status}
    </button>
  );
};

export default Page;
