import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import logo from './logo-header.png'

const AppNav = () => {
  return (
    <Navbar className="theNavBar" variant="dark" expand="lg">
      <Container className="navContainer">
        <Navbar.Brand href="#home">
        <img
          src={logo}
          height="60px"
        />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navLink">
            <Nav.Link href="#the-void">The Void</Nav.Link>
            <Nav.Link href="#stress-dreams">Stress Dreams</Nav.Link>
            <Nav.Link href="#shadow-people">Shadow People</Nav.Link>
            <Nav.Link href="#time-loss">Time Loss</Nav.Link>
            <Nav.Link href="#they-know">They Know Who You Are</Nav.Link>
            <Nav.Link href="#existential-doom">Existential Doom</Nav.Link>
            <Nav.Link href="#blue-rose">Blue Rose</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AppNav;