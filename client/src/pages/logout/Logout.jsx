import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../../axios.config';

function Logout({ onLogout }) {
    const navigate = useNavigate();

    useEffect(() => {
        async function logoutUser() {
            try {
                await axios.get("/api/logout", { withCredentials: true }); // ✅ Use relative path and `withCredentials`

                onLogout(); // 🔹 Clear user session in frontend
                navigate("/login"); // 🔹 Redirect to login page
            } catch (err) {
                console.error("Error logging out:", err);
                navigate("/login"); // Even if an error occurs, redirect to login
            }
        }

        logoutUser();
    }, [navigate, onLogout]);

    return <h2>Logging out...</h2>;
}

export default Logout;