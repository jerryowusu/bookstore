import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const CategoriesPage = () => {
  const status = useSelector((store) => store.categories);

  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(checkStatus());
  };

  return (
    <div className=" w-full flex flex-col gap-3 justify-center items-center">
      <h2 className="bg-inherit  p-2 text-center text-3xl my-20 text-blue-400 grow">
        Categories Page
      </h2>
      <br />
      <button
        type="button"
        className="w-45 h-12 px-4 grid place-content-center font-serif border rounded bg-blue-500 text-white uppercase text-sm font-bold"
        onClick={onClick}
      >
        Check status
      </button>
      <span className=" bg-inherit w-fit h-8 p-2 text-center text-3xl text-green-500">
        {status}
      </span>
    </div>

  );
};

export default CategoriesPage;
