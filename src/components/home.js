import { faSearch, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

export const HomeWrapper = (props) => {
  const location = useLocation();

  return (
    <>
      <Navbar bg="info">
        <Navbar.Brand href="/">Project Awesome</Navbar.Brand>
        <FontAwesomeIcon className="ml-auto" icon={faSearch}/>
        <FontAwesomeIcon icon={faUserCircle}/>
      </Navbar>

      <Nav justify variant="tabs" >
        <Nav.Item >
          <Link className={`nav-link ${location.pathname.includes("newsfeed") ? "active" : ""}`} to="/newsfeed">Home</Link>
        </Nav.Item>
        <Nav.Item>
          <Link className={`nav-link ${location.pathname.includes("tracker") ? "active" : ""}`} to="/tracker">Cal</Link>
        </Nav.Item>
        <Nav.Item>
          <Link className={`nav-link ${location.pathname.includes("appointments") ? "active" : ""}`} to="/appointments">Appointments</Link>
        </Nav.Item>
      </Nav>

      {props.children}

    </>
  );
}
