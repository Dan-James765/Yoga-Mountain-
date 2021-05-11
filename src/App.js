import Header from "./app/Components/Header Components/Header";
import HeaderBlock from "./app/Components/Header Components/HeaderBlock";
import Menu from "./app/Components/Menu Components/Menu";
import Login from "./app/Components/Login Components/Login";
import SignUp from "./app/Components/SignUp Components/SignUp";
import Mobility from "./app/Components/Yoga Mountain Pages Components/Mobility";
import Posture from "./app/Components/Yoga Mountain Pages Components/Posture";
import Flexibility from "./app/Components/Yoga Mountain Pages Components/Flexibility";
import Health from "./app/Components/Yoga Mountain Pages Components/Health";
import Strength from "./app/Components/Yoga Mountain Pages Components/Strength";
import React, { useState } from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Account from "./app/Components/Account Components/Account";
import { useEffect } from "react";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const [openMenu, setOpenMenu] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // User is signed in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        // User is signed out
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
            {openMenu && <Menu />}
            <HeaderBlock />
          </Route>
          <Route exact path="/Login">
            {user ? <Redirect to="/Account" /> : <Login />}
          </Route>
          <Route exact path="/SignUp">
            <SignUp />
          </Route>
          <Route exact path="/Account">
            {!user ? (
              <Redirect to="/Login" />
            ) : (
              <>
                {openMenu && <Menu />}
                <Account openMenu={openMenu} setOpenMenu={setOpenMenu} />
              </>
            )}
          </Route>
          <Route exact path="/Mobility">
            <Mobility openMenu={openMenu} setOpenMenu={setOpenMenu} />
          </Route>
          <Route exact path="/Posture">
            <Posture openMenu={openMenu} setOpenMenu={setOpenMenu} />
          </Route>
          <Route exact path="/Flexibility">
            <Flexibility openMenu={openMenu} setOpenMenu={setOpenMenu} />
          </Route>
          <Route exact path="/Health">
            <Health openMenu={openMenu} setOpenMenu={setOpenMenu} />
          </Route>
          <Route exact path="/Strength">
            <Strength openMenu={openMenu} setOpenMenu={setOpenMenu} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
