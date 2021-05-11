import ButtonSecondary from "../Button Components/ButtonSecondary";
import { FaMountain } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import ButtonPrimary from "../Button Components/ButtonPrimary";
import "./SignUp.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase";
import { useDispatch } from "react-redux";
import { login } from "../../../features/userSlice";
import { useHistory } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const SignUp = (e) => {
    e.preventDefault();

    if (!fName) {
      return alert("Please enter a first name!");
    }
    if (!lName) {
      return alert("Please enter a last name!");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: fName,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: fName,
              })
            );
            history.push("/Account");
          });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <>
      <div className="SignUp">
        <div className="SignUp__header">
          <div className="SignUp__language">
            <MdLanguage /> <span>en-UK</span>
          </div>
          <div className="SignUp__logo">
            <Link to="/">
              <h8>YogaMountain</h8>
              <FaMountain />
            </Link>
          </div>
        </div>
        <div className="SignUp__info">
          <h1>Create Account</h1>

          <form className="SignUp__form">
            <label htmlFor="lName">First Name</label>
            <input
              id="lName"
              type="text"
              value={fName}
              onChange={(e) => setFName(e.target.value)}
            />
            <label htmlFor="lName">Last Name</label>
            <input
              id="lName"
              type="text"
              value={lName}
              onChange={(e) => setLName(e.target.value)}
            />
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Link to="/Signup">
              <ButtonSecondary name="create account" onClick={SignUp} />
            </Link>
          </form>
          <div className="SignUp__divider">
            <hr /> <span>OR</span>
            <hr />
          </div>
          <div className="ButtonPrimary">
            <Link to="/Login">
              <ButtonPrimary name="Sign In" type="submit" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
