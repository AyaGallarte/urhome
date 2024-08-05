import React, { createContext, useState, useEffect, useContext } from 'react';
import UserContext from './UserContext';
import Swal from 'sweetalert2';

const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
    const [workouts, setWorkouts] = useState([]);
    const { user } = useContext(UserContext);

    const fetchWorkouts = async () => {
        const fetchUrl = "https://fitnessapp-api-ln8u.onrender.com/workouts/getMyWorkouts";
        try {
            const response = await fetch(fetchUrl, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            const data = await response.json();
            console.log("Fetched workouts:", data); // Log the fetched data
            if (response.ok) {
                setWorkouts(data.workouts);
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error fetching workouts.',
                    text: data.message || 'Unknown error'
                });
            }
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Error fetching workouts.',
                text: err.message
            });
        }
    };

    useEffect(() => {
        if (user) {
            fetchWorkouts();
        }
    }, [user]);

    return (
        <WorkoutContext.Provider value={{ workouts, setWorkouts, fetchWorkouts }}>
            {children}
        </WorkoutContext.Provider>
    );
};

export default WorkoutContext;
