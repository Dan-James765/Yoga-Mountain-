import React from "react";
import Header from "../Header Components/Header";
import Menu from "../Menu Components/Menu";
import "./Posture.css";

function Posture({ openMenu, setOpenMenu }) {
  return (
    <>
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
      {openMenu && <Menu />}
      <div className="Posture">
        <div className="Posture__title">
          <h1>Posture</h1>
        </div>
      </div>
    </>
  );
}

export default Posture;
