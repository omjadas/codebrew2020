import { faSearch, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Dropdown, Nav, Navbar } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import { FirebaseContext } from "../utils/firebase";

const ProfileIcon = React.forwardRef(({ onClick }, ref) => (
  <FontAwesomeIcon ref={ref} className="ml-auto" onClick={e => {
    e.preventDefault();
    onClick(e);
  }} icon={faUserCircle} size="lg"/>
));

export const HomeWrapper = (props) => {
  const firebase = useContext(FirebaseContext);
  const location = useLocation();
  const history = useHistory();

  const onSignOut = () => {
    firebase.auth
      .signOut()
      .then(() => {
        history.push("/login");
      });
  }

  return (
    <>
      <Navbar bg="info">
        <Navbar.Brand href="/">Project Awesome</Navbar.Brand>
        <Dropdown>
          <Dropdown.Toggle as={ProfileIcon} />
          <Dropdown.Menu alignRight>
            <Dropdown.Item onClick={onSignOut}>Sign Out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>

      <Nav justify variant="tabs" >
        <Nav.Item >
          <Link className={`nav-link ${location.pathname.includes("articles") ? "active" : ""}`} to="/articles">Home</Link>
        </Nav.Item>
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
}
