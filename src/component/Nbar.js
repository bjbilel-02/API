import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Nbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Cp API</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="/login">login</Nav.Link>
            <Nav.Link href="/users">users</Nav.Link>
            <Nav.Link href="/admin">admin</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Nbar