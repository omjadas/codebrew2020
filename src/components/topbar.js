import { faSearch, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Navbar } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { FirebaseContext } from "../utils/firebase";

export const TopBar = ({ isDoctor }) => {
  const firebase = useContext(FirebaseContext);
  const history = useHistory();

  const onSignOut = () => {
    firebase.auth
      .signOut()
      .then(() => {
        history.push("/login");
      });
  };

  return (
    <>
      <Navbar bg="info">
        <Navbar.Brand href="/">Project Awesome</Navbar.Brand>

        {isDoctor && <Link to="/patients" className="ml-auto">
          <FontAwesomeIcon icon={faSearch} size="lg" />
        </Link>}

        <FontAwesomeIcon onClick={onSignOut} icon={faSignOutAlt} size="lg" />
      </Navbar>
    </>
  );
};
