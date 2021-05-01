import './App.css';
import React, {component } from 'react';
import { Button, Form, FormControl} from 'react-bootstrap';
import {Navbar, NavDropdown, Nav, footer} from 'react-bootstrap';


function App() {
  return (
    <div className="container-full-width">
      <div className="navbarcontainer " >
       <Navbar id="navigation" bg="dark" expand="lg" variant="dark">
         <Navbar.Brand href="#home">OurWebsite.com</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="mr-auto">
         <Nav.Link href="#home">Home</Nav.Link>
         <Nav.Link href="#link">Link</Nav.Link>
         <NavDropdown title="Products" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">First </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Second</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Third</NavDropdown.Item>  
         </NavDropdown>
         <Nav.Link href="#link">Contact us</Nav.Link>
         </Nav>
         <Form inline>
         <FormControl type="text" placeholder="Search items" className="mr-sm-2" />
         <Button variant="outline-success">Search</Button>
         </Form>
         </Navbar.Collapse>
</Navbar>
</div>

    <form className="login-form">
      <h2 className="text-center">OurWebsite.com</h2>
      <h4 className="text-center"> Welcome </h4>
      <Form.Group class ="form" controlId="Name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter your name" />
      </Form.Group>

       <Form.Group class ="form" controlId="EmailAdress">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" />
        <Form.Text className="text-muted">
           We'll never share your email with anyone else.
        </Form.Text>
       </Form.Group>

      <Form.Group class ="form" controlId="Password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="Password" placeholder="Please enter your password" />
        <Button variant="link" class="pull-right" className= "pt-0 small">Forgot password?</Button>
      </Form.Group>

      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
      <Button variant=" btn-block btn-secondary">Login</Button>
      <div class="or-seperator separ"><i>Or</i></div>
  
      <div class="text-center social-btn">
            <a href="#" class="btn btn-block btn-primary"><i class="fa fa-facebook"></i>&nbsp; Facebook</a>
            <a href="#" class="btn btn-block btn-info"><i class="fa fa-twitter"></i>&nbsp; Twitter</a>
			<a href="#" class="btn btn-block btn-danger"><i class="fa fa-google"></i>&nbsp; Google</a>
        </div>
        <p class="text-center text-muted small pt-2">Don't have an account? <a href="#">Sign up here!</a></p>
    </form>
    <hr/>
    <footer class="coutries">
         <a href="#">Facebook</a> <a href="#">Tweeter</a> <a href="#">Instagram</a> <a href="#"> Github</a> 
      <p>This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.</p>
      <p>www.OurWebsite.com &copy;2021</p>
   </footer>





    </div>

  );
}

export default App;
