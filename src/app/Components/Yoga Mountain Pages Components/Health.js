import React from "react";
import Header from "../Header Components/Header";
import Menu from "../Menu Components/Menu";
import "./Health.css";

function Health({ openMenu, setOpenMenu }) {
  return (
    <>
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
      {openMenu && <Menu />}
      <div className="Health">
        <div className="Health__title">
          <h1>Health</h1>
        </div>
      </div>
    </>
  );
}

export default Health;
