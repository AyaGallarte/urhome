import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Col, Row, Container } from 'react-bootstrap';
import UserContext from '../context/UserContext';
import Swal from 'sweetalert2';

export default function Login() {
    const { setUser } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isActive, setIsActive] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://fitnessapp-api-ln8u.onrender.com/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                setUser(data.user);
                localStorage.setItem('token', data.token);

                Swal.fire({
                    title: "Login Successful",
                    icon: "success",
                    text: "Successfully logged in",
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    navigate('/workouts');
                });
            } else if (data.error === "Email and password do not match") {
                Swal.fire({
                    title: "Login Failed",
                    icon: "error",
                    text: "Incorrect email or password."
                });
            } else {
                Swal.fire({
                    title: "User Not Found",
                    icon: "error",
                    text: `${email} does not exist.`
                });
            }
        } catch (err) {
            Swal.fire({
                title: "Login Error",
                icon: "error",
                text: "An error occurred. Please try again."
            });
        }
    };

    return (
        <div className="login-container">
            <Container>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <Form onSubmit={handleLogin} className="login-form">
                            <h2 className="text-center">Login</h2>
                            <Form.Group>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    id="loginEmail"
                                    type="email"
                                    placeholder="Enter email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    id="loginPassword"
                                    type="password"
                                    placeholder="Password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>

                            {isActive ? (
                                <Button className="btn" variant="primary" type="submit" id="loginBtn">
                                    Login
                                </Button>
                            ) : (
                                <Button className="btn" variant="danger" type="submit" id="loginBtn" disabled>
                                    Login
                                </Button>
                            )}

                            {error && <p className="text-danger mt-3">{error}</p>}
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
