import { useState, useContext } from 'react';
import { Container, Card, Button, Row, Col, Form } from 'react-bootstrap';
import WorkoutContext from '../context/WorkoutContext';
import Swal from 'sweetalert2';

export default function WorkoutView() {
    const { workouts, setWorkouts, fetchWorkouts } = useContext(WorkoutContext);
    const [name, setName] = useState('');
    const [duration, setDuration] = useState('');

    const handleAddWorkout = (e) => {
        e.preventDefault();

        let addUrl = "https://fitnessapp-api-ln8u.onrender.com/workouts/addWorkout";

        fetch(addUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ name, duration })
        })
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error adding workout.',
                    text: data.error
                });
            } else {
                setWorkouts([...workouts, data]);
                setName('');
                setDuration('');
                Swal.fire({
                    icon: 'success',
                    title: 'Workout added successfully!',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
        .catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Error adding workout.',
                text: err.message
            });
        });
    };

    return (
        <Container className="mt-5">
            <Row>
                <Col md={4}>
                    <h2>Add a Workout</h2>
                    <Form onSubmit={handleAddWorkout}>
                        <Form.Group controlId="workoutName">
                            <Form.Label>Workout Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter workout name" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required 
                            />
                        </Form.Group>
                        <Form.Group controlId="workoutDuration" className="mt-3">
                            <Form.Label>Duration</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter duration" 
                                value={duration}
                                onChange={(e) => setDuration(e.target.value)}
                                required 
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="mt-3">
                            Add Workout
                        </Button>
                    </Form>
                </Col>
            </Row>
            <Row className="mt-5">
                {workouts.map((workout, index) => (
                    <Col key={index} md={4} className="mb-4">
                        <Card>
                            <Card.Body className="p-0">
                                <Card.Title className="text-center bg-dark text-white p-2">Workout Name: {workout.name}</Card.Title>
                                <Card.Text className="m-2">Duration: {workout.duration}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
