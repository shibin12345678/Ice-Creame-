import React from 'react'
import { Col, Container, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap'
import picture2 from   './PicLogo1/picture2.png';
import  vesta from './PicLogo1/vesta-products-main.png';
import { useNavigate } from 'react-router-dom'


const Menu = () => {
  const navigate=useNavigate();
  return (
 <>

    {/* first  Nav bar */}
 <Navbar expand="lg" className="bg-body-tertiary">
      <Container  style={{justifyContent:'center' }}>
        <Navbar.Brand  style={{height:'40px'}}><img  style={{width:"100px",height:"140px", marginTop:"-40px"}} src={picture2}/></Navbar.Brand>
      </Container>
    </Navbar>
      {/* first  Nav bar */}
 
   {/* Seccond Navbar */}

   <Navbar expand="lg" style={{
  backgroundColor: '#0093E9',
  backgroundImage: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)'

}}>
      <Container>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <span  onClick={()=>navigate("/")}   style={{fontSize:'13px',fontWeight:"600" }} > Home</span>
          <Nav className="me-auto">
            <NavDropdown title="Products" id="basic-nav-dropdown"  style={{fontSize:'13px',fontWeight:"600"}}>
              <NavDropdown.Item   onClick={()=>navigate('/allproduct')} href="#action/3.1" style={{fontSize:'13px',fontWeight:"600"}}>ALL PRODUCTS</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>navigate("/icecreamebars")} href="#action/3.2" style={{fontSize:'13px',fontWeight:"600"}}>
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
     {/* Seccond Navbar */}



     {/* Body  section */}

     <div style={{
      backgroundColor: '#8BC6EC',
      backgroundImage: 'linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)',
      minHeight: '450px', // Use minHeight instead of height for responsiveness
      padding: '20px', // Add padding for spacing
    }}>
      <Container>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <img
              style={{ width: '100%', marginBottom: '20px', marginTop:"70px" }}
              src={vesta}
              alt=""
              fluid
            />
          </Col>
        </Row>
      </Container>
    </div>










  {/* Body  section */}
 
 
 </>


  )
}

export default Menu
