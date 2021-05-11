import React from "react";
import Header from "../Header Components/Header";
import Menu from "../Menu Components/Menu";
import "./Mobility.css";

function Mobility({ openMenu, setOpenMenu }) {
  return (
    <>
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
      {openMenu && <Menu />}
      <div className="Mobility">
        <div className="Mobility__title">
          <h1>Mobility</h1>
        </div>
      </div>
    </>
  );
}

export default Mobility;
