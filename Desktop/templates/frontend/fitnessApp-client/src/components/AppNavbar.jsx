// // import React, { useContext } from 'react';
// // import { Navbar, Nav, Container } from 'react-bootstrap';
// // import { Link, NavLink } from 'react-router-dom';
// // import UserContext from '../context/UserContext';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import { CgProfile } from "react-icons/cg";
// // import { IoHomeOutline } from "react-icons/io5";
// // import { PiCatBold } from "react-icons/pi";
// // import { FaCat } from "react-icons/fa"; /*Cat*/
// // import { PiTShirtDuotone } from "react-icons/pi"; /*Product - shirt*/
// // import { BsCart3 } from "react-icons/bs";
// // import { LuLogOut } from "react-icons/lu";
// // import { MdOutlineBorderColor } from "react-icons/md";
// // import { RiLoginBoxLine } from "react-icons/ri";
// // import { LuClipboardList } from "react-icons/lu";
// // import { CgGym } from "react-icons/cg";
// // import logoFitness from '../images/logoFitness.png'; 

// // export default function AppNavbar() {
// //     const { user } = useContext(UserContext);

// //     return (
// //             <Navbar expand="lg" className="nav">
// //                 <Container className="container-navbar">
// //                     <Navbar.Brand as={Link} to="/">
// //                         <img
// //                             src={logoFitness}
// //                             width="80"
// //                             height="40"
// //                             className="d-inline-block align-top"
// //                             alt="Logo"
// //                         />
// //                     </Navbar.Brand>
// //                     <Navbar.Toggle aria-controls="basic-navbar-nav" className="navToggle" />
// //                     <Navbar.Collapse id="basic-navbar-nav">
// //                         <Nav className="me-auto">
// //                             <Nav.Link as={NavLink} to="/"><IoHomeOutline /> Home</Nav.Link>
// //                             <Nav.Link as={NavLink} to="/workout"><CgGym /> Workouts</Nav.Link>

// //                         </Nav>

// //                         <Nav className="ms-auto">
// //                             {user && user.id !== null && user.id !== undefined ? (
// //                                 user.isAdmin ? (       
// //                                     <Nav.Link as={NavLink} to="/logout"><LuLogOut /> Logout</Nav.Link>
// //                                 ) : (
// //                                     <>
// //                                     <Nav.Link as={NavLink} to="/logout"><LuLogOut /> Logout</Nav.Link>
// //                                     </>
// //                                 )
// //                             ) : (
// //                                 <>
// //                                     <Nav.Link as={NavLink} to="/login"><RiLoginBoxLine /> Login</Nav.Link>
// //                                     <Nav.Link as={NavLink} to="/register"><MdOutlineBorderColor /> Register</Nav.Link>
// //                                 </>
// //                             )}
// //                         </Nav>
// //                     </Navbar.Collapse>
// //                 </Container>
// //             </Navbar>
// //         );
// // }
// import React, { useContext } from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import { Link, NavLink } from 'react-router-dom';
// import UserContext from '../context/UserContext';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { IoHomeOutline } from "react-icons/io5";
// import { CgGym } from "react-icons/cg";
// import { RiLoginBoxLine } from "react-icons/ri";
// import { MdOutlineBorderColor } from "react-icons/md";
// import { LuLogOut } from "react-icons/lu";
// import logoFitness from '../images/logoFitness.png'; 

// export default function AppNavbar() {
//     const { user } = useContext(UserContext);

//     return (
//         <Navbar expand="lg" className="nav">
//             <Container className="container-navbar">
//                 <Navbar.Brand as={Link} to="/">
//                     <img
//                         src={logoFitness}
//                         width="80"
//                         height="40"
//                         className="d-inline-block align-top"
//                         alt="Logo"
//                     />
//                 </Navbar.Brand>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" className="navToggle" />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="me-auto">
//                         <Nav.Link as={NavLink} to="/"><IoHomeOutline /> Home</Nav.Link>
//                         <Nav.Link as={NavLink} to="/workouts"><CgGym /> Workouts</Nav.Link>
//                         {user && user.id && !user.isAdmin && (
//                             <Nav.Link as={NavLink} to="/workouts"><CgGym /> Workouts</Nav.Link>
//                         )}
//                     </Nav>

//                     <Nav className="ms-auto">
//                         {user && user.id ? (
//                             <>
//                                 <Nav.Link as={NavLink} to="/logout"><LuLogOut /> Logout</Nav.Link>
//                             </>
//                         ) : (
//                             <>
//                                 <Nav.Link as={NavLink} to="/login"><RiLoginBoxLine /> Login</Nav.Link>
//                                 <Nav.Link as={NavLink} to="/register"><MdOutlineBorderColor /> Register</Nav.Link>
//                             </>
//                         )}
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// }


// import React, { useContext } from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import { Link, NavLink } from 'react-router-dom';
// import UserContext from '../context/UserContext';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { IoHomeOutline } from "react-icons/io5";
// import { CgGym } from "react-icons/cg";
// import { RiLoginBoxLine } from "react-icons/ri";
// import { MdOutlineBorderColor } from "react-icons/md";
// import { LuLogOut } from "react-icons/lu";
// import logoFitness from '../images/logoFitness.png'; 

// export default function AppNavbar() {
//     const { user } = useContext(UserContext);

//     return (
//         <Navbar expand="lg" className="nav">
//             <Container className="container-navbar">
//                 <Navbar.Brand as={Link} to="/">
//                     <img
//                         src={logoFitness}
//                         width="80"
//                         height="40"
//                         className="d-inline-block align-top"
//                         alt="Logo"
//                     />
//                 </Navbar.Brand>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" className="navToggle" />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="me-auto">
//                         <Nav.Link as={NavLink} to="/"><IoHomeOutline /> Home</Nav.Link>
//                         <Nav.Link as={NavLink} to="/workouts"><CgGym /> Workouts</Nav.Link>
//                     </Nav>

//                     <Nav className="ms-auto">
//                         {user && user.id ? (
//                             <Nav.Link as={NavLink} to="/logout"><LuLogOut /> Logout</Nav.Link>
//                         ) : (
//                             <>
//                                 <Nav.Link as={NavLink} to="/login"><RiLoginBoxLine /> Login</Nav.Link>
//                                 <Nav.Link as={NavLink} to="/register"><MdOutlineBorderColor /> Register</Nav.Link>
//                             </>
//                         )}
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// }

// import React, { useContext } from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import { Link, NavLink } from 'react-router-dom';
// import UserContext from '../context/UserContext';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { IoHomeOutline } from "react-icons/io5";
// import { CgGym } from "react-icons/cg";
// import { RiLoginBoxLine } from "react-icons/ri";
// import { MdOutlineBorderColor } from "react-icons/md";
// import { LuLogOut } from "react-icons/lu";
// import logoFitness from '../images/logoFitness.png'; 

// export default function AppNavbar() {
//     const { user } = useContext(UserContext);

//     return (
//         <Navbar expand="lg" className="nav">
//             <Container className="container-navbar">
//                 <Navbar.Brand as={Link} to="/">
//                     <img
//                         src={logoFitness}
//                         width="80"
//                         height="40"
//                         className="d-inline-block align-top"
//                         alt="Logo"
//                     />
//                 </Navbar.Brand>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" className="navToggle" />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="me-auto">
//                         <Nav.Link as={NavLink} to="/"><IoHomeOutline /> Home</Nav.Link>                     
//                     </Nav>

//                     <Nav className="ms-auto">
//                         {user && user.id ? (
//                             <>
//                             <Nav.Link as={NavLink} to="/workouts"><CgGym /> Workouts</Nav.Link>
//                             <Nav.Link as={NavLink} to="/logout"><LuLogOut /> Logout</Nav.Link>
//                             </>
//                         ) : (
//                             <>
//                                 <Nav.Link as={NavLink} to="/login"><RiLoginBoxLine /> Login</Nav.Link>
//                                 <Nav.Link as={NavLink} to="/register"><MdOutlineBorderColor /> Register</Nav.Link>
//                             </>
//                         )}
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// }


import React, { useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import UserContext from '../context/UserContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoHomeOutline } from "react-icons/io5";
import { CgGym } from "react-icons/cg";
import { RiLoginBoxLine } from "react-icons/ri";
import { MdOutlineBorderColor } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import logoFitness from '../images/logoFitness.png'; 

export default function AppNavbar() {
    const { user } = useContext(UserContext);

    return (
        <Navbar expand="lg" className="nav">
            <Container className="container-navbar">
                <Navbar.Brand as={Link} to="/">
                    <img
                        src={logoFitness}
                        width="80"
                        height="40"
                        className="d-inline-block align-top"
                        alt="Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="navToggle" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/"><IoHomeOutline /> Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/workouts"><CgGym /> Workouts</Nav.Link>
                        {user && user.id && (
                            <Nav.Link as={NavLink} to="/workouts"><CgGym /> Workouts</Nav.Link>
                        )}
                    </Nav>

                    <Nav className="ms-auto">
                        {user && user.id ? (
                            <>
                                <Nav.Link as={NavLink} to="/logout"><LuLogOut /> Logout</Nav.Link>
                            </>
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

// import React, { useContext } from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import { Link, NavLink } from 'react-router-dom';
// import UserContext from '../context/UserContext';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { IoHomeOutline } from "react-icons/io5";
// import { CgGym } from "react-icons/cg";
// import { RiLoginBoxLine } from "react-icons/ri";
// import { MdOutlineBorderColor } from "react-icons/md";
// import { LuLogOut } from "react-icons/lu";
// import logoFitness from '../images/logoFitness.png'; 

// export default function AppNavbar() {
//     const { user } = useContext(UserContext);

//     return (
//         <Navbar expand="lg" className="nav">
//             <Container className="container-navbar">
//                 <Navbar.Brand as={Link} to="/">
//                     <img
//                         src={logoFitness}
//                         width="80"
//                         height="40"
//                         className="d-inline-block align-top"
//                         alt="Logo"
//                     />
//                 </Navbar.Brand>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" className="navToggle" />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="me-auto">
//                         <Nav.Link as={NavLink} to="/"><IoHomeOutline /> Home</Nav.Link>
//                         {user && user.id && !user.isAdmin && (
//                             <Nav.Link as={NavLink} to="/workout"><CgGym /> Workouts</Nav.Link>
//                         )}
//                     </Nav>

//                     <Nav className="ms-auto">
//                         {user && user.id ? (
//                             <>
//                                 {!user.isAdmin && (
//                                     <Nav.Link as={NavLink} to="/workout"><CgGym /> Workouts</Nav.Link>
//                                 )}
//                                 <Nav.Link as={NavLink} to="/logout"><LuLogOut /> Logout</Nav.Link>
//                             </>
//                         ) : (
//                             <>
//                                 <Nav.Link as={NavLink} to="/login"><RiLoginBoxLine /> Login</Nav.Link>
//                                 <Nav.Link as={NavLink} to="/register"><MdOutlineBorderColor /> Register</Nav.Link>
//                             </>
//                         )}
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// }

