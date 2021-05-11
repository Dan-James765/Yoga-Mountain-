import ButtonPrimary from "../Button Components/ButtonPrimary";
import ButtonSecondary from "../Button Components/ButtonSecondary";
import "./Login.css";
import { MdLanguage } from "react-icons/md";
import { FaMountain } from "react-icons/fa";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase";
import { useDispatch } from "react-redux";
import { login } from "../../../features/userSlice";
import { useHistory } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
          })
        );
        history.push("/Account");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <>
      <div className="login">
        <div className="login__header">
          <div className="login__language">
            <MdLanguage /> <span>en-UK</span>
          </div>
          <div className="login__logo">
            <Link to="/">
              <h8>YogaMountain</h8>
              <FaMountain />
            </Link>
          </div>
        </div>
        <div className="login__info">
          <h1>Sign In</h1>
          <form className="login__form">
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <ButtonPrimary name="Sign In" type="submit" onClick={signIn} />
          </form>
          <div className="login__divider">
            <hr /> <span>OR</span>
            <hr />
          </div>
          <Link to="/SignUp">
            <ButtonSecondary name="create account" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
