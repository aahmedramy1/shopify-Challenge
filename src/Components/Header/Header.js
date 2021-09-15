import React from "react";
import "./Header.css";
import { changeSearchValue } from "../../Slices/rootSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <p className="navbar-brand">Spacestagram</p>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => {
                dispatch(changeSearchValue(e.target.value));
              }}
            />
            {/* <button className="btn btn-outline-success" type="submit">
              Search
            </button> */}
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Header;
