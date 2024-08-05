import React, { useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CgProfile } from "react-icons/cg";
import { IoHomeOutline } from "react-icons/io5";
import { PiCatBold } from "react-icons/pi";
import { FaCat } from "react-icons/fa"; /*Cat*/
import { PiTShirtDuotone } from "react-icons/pi"; /*Product - shirt*/
import { BsCart3 } from "react-icons/bs";
import { LuLogOut } from "react-icons/lu";
import { MdOutlineBorderColor } from "react-icons/md";
import { RiLoginBoxLine } from "react-icons/ri";
import { LuClipboardList } from "react-icons/lu";
import logo from '../images/logo.png'; 

export default function AppNavbar() {
    return (
        <Navbar expand="lg" className="nav">
            <Container className="container-navbar">
                <Navbar.Brand as={Link} to="/">
                    <img
                        src={logo}
                        width="150"
                        height="40"
                        className="d-inline-block"
                        alt="Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="navToggle" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/"><IoHomeOutline /> Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/products"><PiCatBold /> Products</Nav.Link>
                        <Nav.Link as={NavLink} to="/cart"><BsCart3 /> Cart</Nav.Link>
                        <Nav.Link as={NavLink} to="/login"><RiLoginBoxLine /> Login</Nav.Link>
                    </Nav>                   
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
