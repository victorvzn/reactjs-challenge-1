import React from 'react';
// import { Link } from 'react-router-dom';

import { Navbar, Container } from 'react-bootstrap';

function HeaderTop (props) {
  return (
    <Navbar bg="light">
      <Container fluid className="justify-content-md-center">
          <h1 className="text-center">My Shop</h1>
      </Container>
    </Navbar>
  )
}

export default HeaderTop;