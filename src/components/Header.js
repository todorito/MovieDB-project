import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

const Header = function () {
  const activeLinkClass = "text-neutral p-2 m-1 rounded button-info";
  const defaultLinkClass =
    "text-white p-2 m-1 rounded background-button-neutral";
  return (
    <>
      <nav className="md:flex md:flex-row background-neutral-strong py-4">
        <div className="ml-2 md:grow mt-2">
          <NavLink
            className={({ isActive }) =>
              isActive ? activeLinkClass : defaultLinkClass
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeLinkClass : defaultLinkClass
            }
            to="/favourites"
          >
            Favourites
          </NavLink>
        </div>
        <div className="md:w-auto w-full mt-5 md:mt-0">
          <SearchBar /> 
        </div>
        <div className="md:ml-[10rem] md:grow"></div>
      </nav>
    </>
  );
};

export default Header;
