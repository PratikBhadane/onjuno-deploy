import React from 'react'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Navbar_improvise.css';
import { Jumbotron,Navbar,Nav,NavDropdown,Form, Button, Card , InputGroup, FormControl, Container, Row, Col, Image,Badge,ProgressBar} from 'react-bootstrap'



function Navbar_improvise()
{



    return <div>
    <Navbar bg="light" expand="lg" fixed='top'>
    <Navbar.Brand href="#home" id='logo-onjuno'>
        <img className='logo-one' src="web_challenge.png" alt=""/>
        
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" >
      <Nav className="mr-auto">
        <h3 id='onjuno-name'>ONJUNO</h3>
        <Nav.Link href="#home" id='home-name' className='common-margin'>Home</Nav.Link>
        <NavDropdown title="Company" id="basic-nav-dropdown" className='nav-drop common-margin'>
          <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">NewsRoom</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Career</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Partners</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="Learn" id="basic-nav-dropdown" className='nav-drop common-margin'>
          <NavDropdown.Item href="#action/3.1">Blog</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Guides</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Help Center</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="Legal" id="basic-nav-dropdown" className='nav-drop common-margin'>
          <NavDropdown.Item href="#action/3.1">Privacy Policy</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Term of Use</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Trademarks</NavDropdown.Item>
        </NavDropdown>
         
        <Form inline>
            <Button variant="outline-success" id='login'>Login</Button>
            <Button variant='primary' id='sign'>Signup</Button>
        </Form>
      </Nav>
      
    </Navbar.Collapse>
  </Navbar>

   
    </div>
}
export default Navbar_improvise; 