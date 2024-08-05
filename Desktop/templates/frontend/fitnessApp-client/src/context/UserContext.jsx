import React, { createContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    useEffect(() => {
        if (user) {
            console.log("Setting user to localStorage", user);
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            console.log("Removing user from localStorage");
            localStorage.removeItem('user');
        }
    }, [user]);

    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
    };

    return (
        <UserContext.Provider value={{ user, setUser, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
