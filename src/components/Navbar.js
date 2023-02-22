import React from 'react'
import {Link} from 'react-router-dom'
import {logo} from "../utils/constants";
import {SearchBar} from "./SearchBar.js";

const Navbar = () => (
  <div className='navbar-stack'>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
      <h2>
        Mytube
      </h2>
    </Link>
    <SearchBar/>
  </div>
);

export default Navbar;