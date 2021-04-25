import React from 'react';
// import { Link } from 'react-router-dom';

import { Navbar, Container, Nav, Button, Badge } from 'react-bootstrap';

class MainNav extends React.Component {
  render() {
    return (
      <Navbar bg="light">
        <Container fluid>
          <Navbar.Brand href="/">
            <i className="las la-store-alt"></i>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Products</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="primary">
              <i className="las la-shopping-cart font-16 "></i> <Badge variant="light">0</Badge>
            </Button>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default MainNav;