import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import './forms.css';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/login', {
                username,
                password
            });

            // TODO: implementation of receiving

            navigate('/dashboard');
        } catch (err) {
            console.error('Login error:', err.response?.data || err.message);
            setError(err.response?.data?.message || 'Login failed.');
        }
    };

    return (
    <Card className="login-card">
        <Card.Body>
            <h2>Log In</h2>
            <p>No account yet? <Link to="/signup" className="signup-link">Sign up</Link> and get 10 XP!</p>                <Form>
            <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Username"/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control type="password" placeholder="Password"/>
            </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </Card.Body>
    </Card>
    );
}

export default LoginForm;