import { useEffect, useState } from 'react';
import {Container} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import { AiOutlineArrowRight } from "react-icons/ai";


function Navb() {
    const [stickyClass, setStickyClass] = useState('');
  
    useEffect(() => {
      window.addEventListener('scroll', stickNavbar);
      return () => window.removeEventListener('scroll', stickNavbar);
    }, []);
  
    const stickNavbar = () => {
      if (window !== undefined) {
        let windowHeight = window.scrollY;
        windowHeight > 300 ? setStickyClass('sticky-nav') : setStickyClass('');
      }
    }
    
    return (
    <Navbar expand="lg" className={`bg-body-tertiary ${stickyClass}`}>
      <Container>
        <Navbar.Brand href="#home">recurit<span className='dot'></span>me</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <NavDropdown title="Resources" id="basic-nav-dropdown">
              <NavDropdown.Item href="#blogs">Blogs</NavDropdown.Item>
              <NavDropdown.Item href="#rviewe">Customers Review</NavDropdown.Item>
              <NavDropdown.Item href="#next">What's next</NavDropdown.Item>
              <NavDropdown.Item href="#tech">Current Tech</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#counsult">HR Counsulting</NavDropdown.Item>
              <NavDropdown.Item href="#resource">Improving Resources</NavDropdown.Item>
              <NavDropdown.Item href="#planning">Strategic Planning</NavDropdown.Item>
              <NavDropdown.Item href="#employee">Employee Training </NavDropdown.Item>
              <NavDropdown.Item href="#leadership">Leadership Training</NavDropdown.Item>
              <NavDropdown.Item href="#program">Corporate Program</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pric">Pricing</Nav.Link>
            <Nav.Link href="#login">Login</Nav.Link>
          </Nav>
          <div id='appointment'>
            <span>MAKE APPOINTMENT</span>
            <div>
                <AiOutlineArrowRight className='arrow'/>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default Navb;