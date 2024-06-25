import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {CartWidget} from '../CartWidget/CartWidget';
import { PiHeartbeatFill } from "react-icons/pi";
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
                  <Link to={`/`}><PiHeartbeatFill />p l e a s i n g</Link>
                  <Link to={'/'}>Home</Link>
                  <Link to={'/category/serums'}>Serums</Link>
                  <Link to={'/category/cleansers'}>Cleansers</Link>
                  <Link to={'/category/sunscreens'}>Protectores solares</Link>
                          
            <CartWidget/>
          </Nav>
       
      </Container>
    </Navbar>
  );
} 

export default NavBar;