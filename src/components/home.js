import { faSearch, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";

export const Home = () => {
  return (
    <>
      <Navbar bg="light">
        <Navbar.Brand href="/">Project Awesome</Navbar.Brand>
        <FontAwesomeIcon className="ml-auto" icon={faSearch}/>
        <FontAwesomeIcon icon={faUserCircle}/>
      </Navbar>

      <Nav justify variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link >Cal</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link >Appointments</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}
