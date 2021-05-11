import React from "react";

function AccountBlock({ imgSrc }) {
  return (
    <>
      <div className="AccountBlock">
        <div className="AccountBlock__image">
          <img src={imgSrc} />
        </div>
        <div className="Account__images"></div>
      </div>
    </>
  );
}

export default AccountBlock;
