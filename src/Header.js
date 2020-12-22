import React from "react";

function Header(props) {
  return (
    <header>
      <form id="form">
        <input
          type="text"
          className="search"
          placeholder="Search"
          onChange={props.searchMovie}
        />
      </form>
    </header>
  );
}

export default Header;
