import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const Navbarmenu = () => {
    const navigate=useNavigate();
  return (
    <div>
        

<Navbar expand="lg" style={{backgroundColor:"#EFBB3B"}}>
<Container>
   
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <span  onClick={()=>navigate('/')}  style={{fontSize:'13px',fontWeight:"600" }} > Home</span>
    <Nav className="me-auto">
      <NavDropdown title="Products" id="basic-nav-dropdown"  style={{fontSize:'13px',fontWeight:"600"}}>
        <NavDropdown.Item  onClick={()=>navigate('/allproduct')} href="#action/3.1" style={{fontSize:'13px',fontWeight:"600"}}>ALL PRODUCTS</NavDropdown.Item>
        <NavDropdown.Item  onClick={()=>navigate('/icecreamebars')} href="#action/3.2" style={{fontSize:'13px',fontWeight:"600"}}>
        ICE CREAME BARS
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3" style={{fontSize:'13px',fontWeight:"600"}}>ICE CREAME CONES</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
      <NavDropdown title="Recipes" id="basic-nav-dropdown"  style={{fontSize:'13px',fontWeight:"600"}}>
        <NavDropdown.Item href="#action/3.1" style={{fontSize:'13px',fontWeight:"600"}}>SHAKE & SMOOTHIES</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2" style={{fontSize:'13px',fontWeight:"600"}}>
          CAKES & CUPCAKES
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3" style={{fontSize:'13px',fontWeight:"600"}}>DRINKS</NavDropdown.Item>
        <NavDropdown.Divider /> 
       
      </NavDropdown>
      <NavDropdown title="About Us" id="basic-nav-dropdown"  style={{fontSize:'13px',fontWeight:"600"}}>
        <NavDropdown.Item href="#action/3.1" style={{fontSize:'13px',fontWeight:"600"}}>HISTORY</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2" style={{fontSize:'13px',fontWeight:"600"}}>
          THEMES
        </NavDropdown.Item>
            
      </NavDropdown>
     
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
    </div>
  )
}

export default Navbarmenu
