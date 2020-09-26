import { faSearch, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Nav, Navbar, Tabs, Tab } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";

export const HomeWrapper = (props) => {
  

  return (
    <>
      <Navbar bg="info">
        <Navbar.Brand href="/">Project Awesome</Navbar.Brand>
        <FontAwesomeIcon className="ml-auto" icon={faSearch}/>
        <FontAwesomeIcon icon={faUserCircle}/>
      </Navbar>

      <Nav justify variant="tabs" >
        <Nav.Item >
          <Link className={`nav-link ${useLocation().pathname.includes("newsfeed") ? "active" : ""}`} to="/home/newsfeed">Home</Link>
        </Nav.Item>
        <Nav.Item>
          <Link className={`nav-link ${useLocation().pathname.includes("tracker") ? "active" : ""}`} to="/home/tracker">Cal</Link>
        </Nav.Item>
        <Nav.Item>
          <Link className={`nav-link ${useLocation().pathname.includes("appointments") ? "active" : ""}`} to="/home/appointments">Appointments</Link>
        </Nav.Item>
      </Nav>

      {props.children}

    </>
  );
}
