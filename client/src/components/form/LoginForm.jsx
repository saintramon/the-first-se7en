import React, { useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import LoginBtn from '../ui/LoginBtn';
import './forms.css';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/login', {
                username,
                password       
            });

            localStorage.setItem('user', JSON.stringify(response.data)); // saves session in localStorage

            navigate('/home');
        } catch (err) {
            console.error('Login error:', err.response?.data || err.message);
            setError(err.response?.data?.message || 'Login failed.');
        }
    };

    return (
    <Card className="login-card">
        <Card.Body>
            <h2>Log In</h2>
            <p>No account yet? <Link to="/signup" className="signup-link">Sign up </Link> and get 10 XP!</p>               
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Control 
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Form.Group>
                <LoginBtn type="submit" />
            </Form>
        </Card.Body>
    </Card>
    );
}

export default LoginForm;