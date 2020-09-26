import { faSearch, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <Navbar bg="info">
        <Navbar.Brand href="/">Project Awesome</Navbar.Brand>
        <FontAwesomeIcon className="ml-auto" icon={faSearch}/>
        <FontAwesomeIcon icon={faUserCircle}/>
      </Navbar>

      <Nav justify variant="tabs" defaultActiveKey="/">
        <Nav.Item>
          <Link className="nav-link" to="/">Home</Link>
        </Nav.Item>
        <Nav.Item>
          <Link className="nav-link" to="/questions">Cal</Link>
        </Nav.Item>
        <Nav.Item>
          <Link className="nav-link" to="/">Appointments</Link>
        </Nav.Item>
      </Nav>
    </>
  );
}
