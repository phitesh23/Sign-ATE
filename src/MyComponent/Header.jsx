import React from "react";
import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { title } = props;

  const headerStyle = {    
    backgroundColor: "rgb(210 210 210)",
    color: "#333",
    fontWeight: "bold",
    borderRadius: "5px",
    transition: "background-color 0.3s",
  };
 
  const navLinkStyle = {
    padding: "5px 10px",
    fontSize: "1.2rem",
    textDecoration: "none",
    color: "#333",
    transition: "color 0.3s",
  };
  
  const logoStyle = {
    fontSize: "1.7rem",
  };


  const onNavLinkHover = (e) => {
    e.target.style.color = "purple";
  };

  const onNavLinkLeave = (e) => {
    e.target.style.color = "#333";
  };

  return (
    <>
      <Row style={headerStyle}>
        <Col>
          <Navbar expand="sm" >
            <Container>
              <Navbar.Brand to="/" style={logoStyle}>
                  <img width="35rem" height="35rem" src="https://img.icons8.com/fluency/48/sticky-notes.png" alt="Logo" className="align-center" />
                  {title} 
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end ">
                <Nav>
                  <Nav.Link
                    onClick={() => { props.setG(true) }}
                    style={navLinkStyle}
                    onMouseOver={onNavLinkHover}
                    onMouseLeave={onNavLinkLeave}
                  >
                    Home
                  </Nav.Link  >
                  <Link
                    onClick={() => { props.setG(false) }}
                    style={navLinkStyle}
                    onMouseOver={onNavLinkHover}
                    onMouseLeave={onNavLinkLeave}
                  >
                    About
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
      </Row>
    </>
  );
};

export default Header;