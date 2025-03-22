import React, { useState } from 'react';
import axios from '../../../axios.config';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import LoginBtn from '../buttons/LoginBtn';
import '../styles/forms.css';

function LoginForm( { updateUser }) {
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

            updateUser(response.data, response.data.xp);

            navigate('/home');
        } catch (err) {
            console.error('Login error:', err.response?.data || err.message);
            setError(err.response?.data?.message || 'Login failed.');
        }
    };

    return (
    <Card className="login-card">
        <Card.Body>
            <h2>Welcome Back</h2>
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
            {error && <p className="error-text">{error}</p>}        
        </Card.Body>
    </Card>
    );
}

export default LoginForm;