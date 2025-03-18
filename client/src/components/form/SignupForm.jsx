import React, { useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import SignupBtn from '../ui/SignupBtn';
import './forms.css';

function SignupForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword]= useState('');
    const [confirm_password, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/signup', {
                username,
                password,
                confirm_password
            })

            // TODO: IMPLEMENTATION 
            navigate('/login');
        } catch (err) {
            // TODO: IMPLEMENTATION
        }
    }

    return (
    <Card className="login-card">
        <Card.Body>
            <h2>Create Account</h2>
            <p>Already have an account? 
                <Link to="/login" className="signup-link">
                    Log In
                </Link></p>                
            <Form>
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
                <Form.Group className="mb-3">
                    <Form.Control 
                        type="password" 
                        placeholder="Confirm Password"
                        value={confirm_password}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </Form.Group>
                <SignupBtn type="submit" />
            </Form>
        </Card.Body>
    </Card>
    );
}

export default SignupForm;