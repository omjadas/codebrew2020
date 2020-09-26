import React, { useContext, useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { Link, Redirect, useLocation } from "react-router-dom";
import { FirebaseContext } from "../utils/firebase";
import { TopBar } from "./topbar";

export const HomeWrapper = (props) => {
  const firebase = useContext(FirebaseContext);
  const location = useLocation();
  const [isDoc, setIsDoc] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [signedIn, setSignedIn] = useState(true);

  useEffect(() => {
    firebase.user
      .then(user => {
        if (user !== null) {
          return firebase.firestore.collection("users").where("email", "==", user.email).get();
        } else {
          return Promise.reject();
        }
      })
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log(doc.data());
          if (doc.data().isDoc) {
            setIsDoc(true);
          }
          setLoaded(true);
        });
      })
      .catch(e => {
        console.error(e);
        setSignedIn(false);
      });
  }, [firebase.firestore, firebase.user]);

  if (!signedIn) {
    return <Redirect to="/login" />;
  }

  if (!loaded) {
    return <></>;
  }

  if (location.pathname.includes("articles") && isDoc) {
    return <Redirect to="/patients" />;
  }

  return (
    <>
      <TopBar isDoctor={isDoc}/>

      <Nav justify variant="tabs" >
        {
          !isDoc &&
            <Nav.Item>
              <Link className={`nav-link ${location.pathname.includes("articles") ? "active" : ""}`} to="/articles">Home</Link>
            </Nav.Item>
        }
        <Nav.Item>
          <Link className={`nav-link ${location.pathname.includes("tracker") || location.pathname.includes("entry") ? "active" : ""}`} to="/tracker">Tracker</Link>
        </Nav.Item>
        <Nav.Item>
          <Link className={`nav-link ${location.pathname.includes("profile") ? "active" : ""}`} to="/profile">Profile</Link>
        </Nav.Item>
      </Nav>

      {props.children}
    </>
  );
};
