import React from 'react';
import { NavLink } from 'react-router-dom';
import { ImUser } from 'react-icons/im';

const NavBar = () => (
  <header className="flex bg-white justify-between p-6 md:px-24 w-full shadow-md min-h-24">
    <nav className="container mx-auto h-20 flex items-center gap-5">
      <NavLink to="/">
        <h1 className="text-3xl font-bold text-blue-500">
          Bookstore CMS
        </h1>
      </NavLink>
      <NavLink to="/">
        <span className="h-full flex items-center text-black-two text-sm">
          BOOKS
        </span>
      </NavLink>
      <NavLink to="/categories">
        <span className="h-full flex items-center text-black-two text-sm opacity-50">
          CATEGORIES
        </span>
      </NavLink>
    </nav>
    <button
      type="button"
      className="h-11 w-11 text-3xl flex items-center p-2 text-azure rounded-full border-2 border-grey-border"
    >
      <ImUser className="text-blue-500" />
    </button>
  </header>
);

export default NavBar;
