import React, { useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { CgProfile } from "react-icons/cg";
import { IoHomeOutline } from "react-icons/io5";
import { PiTShirtDuotone } from "react-icons/pi";
import { BsCart3 } from "react-icons/bs";
import { LuLogOut } from "react-icons/lu";
import { MdOutlineBorderColor } from "react-icons/md";
import { RiLoginBoxLine } from "react-icons/ri";
import { LuClipboardList } from "react-icons/lu";
import logo from '../images/logo.png'; 
import '../style.css';

export default function AppNavbar() {
    const { user } = useContext(UserContext);

    return (
        <Navbar expand="lg" className="nav">
            <Container className="container-navbar">
                <Navbar.Brand as={Link} to="/">
                    <img
                        src={logo}
                        width="40"
                        height="25"
                        className="d-inline-block align-top"
                        alt="Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="navToggle" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/"><IoHomeOutline /> Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/products"><PiTShirtDuotone /> Products</Nav.Link>
                    </Nav>

                    <Nav className="ms-auto">
                        {user && user.id !== null && user.id !== undefined ? (
                            user.isAdmin ? (       
                                <Nav.Link as={NavLink} to="/logout"><LuLogOut /> Logout</Nav.Link>
                            ) : (
                                <>
                                    <Nav.Link as={NavLink} to="/cart"><BsCart3 /> Cart</Nav.Link>
                                    <Nav.Link as={NavLink} to="/order"><LuClipboardList /> Order</Nav.Link>
                                    <Nav.Link as={NavLink} to="/profile"><CgProfile /> Profile</Nav.Link>
                                    <Nav.Link as={NavLink} to="/logout"><LuLogOut /> Logout</Nav.Link>
                                </>
                            )
                        ) : (
                            <>
                                <Nav.Link as={NavLink} to="/login"><RiLoginBoxLine /> Login</Nav.Link>
                                <Nav.Link as={NavLink} to="/register"><MdOutlineBorderColor /> Register</Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
