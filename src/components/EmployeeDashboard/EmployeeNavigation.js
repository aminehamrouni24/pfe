import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from "react-router-dom";

const EmployeeNavigation = () => {
  const navigate = useNavigate();
  const logOut = () => {
      localStorage.removeItem("token");
      navigate.push("/login");
      navigate.go(0);
  };

    return (
        
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home"> <Link to="/dashboardE">Home</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features"></Nav.Link>
              <Nav.Link href="#pricing"> <Link to ="/EmployeeMyAttendance">Attendance</Link></Nav.Link>
              <NavDropdown title="Leaves" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1"> <Link to="EmployeeApplyLeave">My leaves</Link></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2"><Link to="/EmployeeMyLeave" >Apply Leaves</Link></NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <NavDropdown title="My account" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1"><a onClick={()=>logOut()}>= Log out</a></NavDropdown.Item>
              </NavDropdown>
            <Nav>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default EmployeeNavigation;
