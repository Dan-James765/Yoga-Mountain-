import React from "react";
import Header from "../Header Components/Header";
import Menu from "../Menu Components/Menu";
import "./Strength.css";

function Strength({ openMenu, setOpenMenu }) {
  return (
    <>
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
      {openMenu && <Menu />}
      <div className="Strength">
        <div className="Strength__title">
          <h1>Strength</h1>
        </div>
      </div>
    </>
  );
}

export default Strength;
