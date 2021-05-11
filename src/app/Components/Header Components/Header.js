import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaMountain } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Header.css";
import React from "react";

function Header({ openMenu, setOpenMenu }) {
  return (
    <>
      <header className="header">
        <div className="header__menu" onClick={() => setOpenMenu(!openMenu)}>
          {openMenu ? <FaTimes /> : <FaBars />}
        </div>

        <div className="header__centre">
          <Link to="/Health">Health</Link>
          <Link to="/Flexibility">Flexibility</Link>
          <Link to="/Mobility">Mobility</Link>
          <Link to="/Posture">Posture</Link>
          <Link to="/Strength">Strength</Link>
        </div>
        <div className="header__right">
          <Link className="header__account" to="/Login">
            Account
          </Link>
          <Link to="/">
            <h8>YogaMountain</h8>
            <FaMountain />
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
