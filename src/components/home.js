import { faSearch, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Nav } from "react-bootstrap";
import "../styles/home.css";

export const Home = () => {
  return (
    <>
      <nav className="navbar sticky-top navbar-light bg-light">
        <a className="navbar-brand" href="/">Project Awesome</a>

        <div className="justify-content-end ">
          <FontAwesomeIcon icon={faSearch}/>
          <FontAwesomeIcon icon={faUserCircle}/>
        </div>
      </nav>

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
