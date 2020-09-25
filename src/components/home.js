import React from 'react';
import { Nav } from 'react-bootstrap';
import '../styles/home.css';

export const Home = () => {
  return (
    <>
      <nav class="navbar sticky-top navbar-light bg-light">
        <a class="navbar-brand" href="/">Project Awesome</a>

        <div class="justify-content-end ">
          <i className = "fas fa-search fa-lg nav-icons"></i>
          <i class="far fa-user-circle fa-lg nav-icons"></i>
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
