import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import Picture1 from './PicLogo1/picture1.png'
import { useNavigate } from 'react-router-dom'

const Menu = () => {
  const navigate=useNavigate();
  return (
 <>

    {/* first  Nav bar */}
 <Navbar expand="lg" className="bg-body-tertiary">
      <Container  style={{justifyContent:'center' }}>
        <Navbar.Brand  style={{height:'40px'}}><img  style={{width:"120px",height:"100px", marginTop:"-40px"}} src={Picture1}/></Navbar.Brand>
      </Container>
    </Navbar>
      {/* first  Nav bar */}
 
   {/* Seccond Navbar */}




   <Navbar expand="lg" style={{backgroundColor:"#EFBB3B"}}>
      <Container>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <span  onClick={()=>navigate("/")}  > Home</span>
          <Nav className="me-auto">
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" style={{fontSize:'13px',fontWeight:"600"}}>ALL PRODUCTS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" style={{fontSize:'13px',fontWeight:"600"}}>
              ICE CREAME BARS
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" style={{fontSize:'13px',fontWeight:"600"}}>ICE CREAME CONES</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <NavDropdown title="Recipes" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" style={{fontSize:'13px',fontWeight:"600"}}>SHAKE & SMOOTHIES</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" style={{fontSize:'13px',fontWeight:"600"}}>
                CAKES & CUPCAKES
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" style={{fontSize:'13px',fontWeight:"600"}}>DRINKS</NavDropdown.Item>
              <NavDropdown.Divider /> 
             
            </NavDropdown>
            <NavDropdown title="About Us" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" style={{fontSize:'13px',fontWeight:"600"}}>HISTORY</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" style={{fontSize:'13px',fontWeight:"600"}}>
                THEMES
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     {/* Seccond Navbar */}
 
 
 
 </>


  )
}

export default Menu
