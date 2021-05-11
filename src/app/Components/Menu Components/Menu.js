import React from "react";
import MenuItem from "./MenuItem";
import "./Menu.css";

function Menu() {
  return (
    <>
      <div className="menu">
        <MenuItem title="Vinyasa" />
        <MenuItem title="Hatha Yoga" />
        <MenuItem title="Ashtanga Yoga" />
        <MenuItem title="Kundalini Yoga" />
        <MenuItem title="Bhakti Yoga" />
        <MenuItem title="Rāja Yoga" />
        <MenuItem title="Jñāna Yoga" />
        <MenuItem title="Bhakti Yoga" />
        <MenuItem title="Tantra Yoga" />
      </div>
    </>
  );
}

export default Menu;
