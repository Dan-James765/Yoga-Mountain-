import React from "react";
import Header from "../Header Components/Header";
import Menu from "../Menu Components/Menu";
import "./Flexibility.css";

function Flexibility({ openMenu, setOpenMenu }) {
  return (
    <>
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
      {openMenu && <Menu />}
      <div className="Flexibility">
        <div className="Flexibility__title">
          <h1>Flexibility</h1>
        </div>
      </div>
    </>
  );
}

export default Flexibility;
