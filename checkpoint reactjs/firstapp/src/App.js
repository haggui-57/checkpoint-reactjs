import React from "react"

import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {Nav,Navbar,Form,Button} from 'react-bootstrap'
function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark"
      sticky="top" expand="lg"> 
      <Navbar.Brand>
        
      </Navbar.Brand>
      <Navbar.Toggle/>
      <Navbar.Collapse>

          <Nav>
          <Nav.Link href="products">HOME</Nav.Link>
            <Nav.Link href="products">ABOUT</Nav.Link>
            <Nav.Link href="products">CONTACT</Nav.Link>
          </Nav>


      </Navbar.Collapse>
</Navbar>
      <div className="content">
      <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    
      </div>

    </div>
  );
}

export default App;
