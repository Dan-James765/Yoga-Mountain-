import React from "react";
import "./Account.css";
import { Link, useHistory } from "react-router-dom";
import { FaMountain } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import { logout, selectUser } from "../../../features/userSlice";
import { auth } from "../../../firebase";
import { useDispatch } from "react-redux";

function Account() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const history = useHistory();

  const logoutOfApp = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(logout());
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <>
      <div className="Account">
        <div className="Account__header">
          <div className="Account__logo">
            <Link to="/">
              <h8>
                YogaMountain <FaMountain />
              </h8>
            </Link>
          </div>
        </div>
        <div className="Account__info">
          <div className="Account__person">
            <h4>
              {user?.displayName + "'s"} <h8>Yoga Mountain</h8> <FaMountain />{" "}
            </h4>
          </div>
          <div className="Account__infoRight">
            <Link to="/">Home</Link>
            <Link>Account</Link>
            <Link onClick={logoutOfApp}>Sign out</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
