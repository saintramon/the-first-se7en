import React, { useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import SignupBtn from '../buttons/SignupBtn';
import '../styles/forms.css';

function SignupForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(''); // ✅ Add success message state
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        try {
            const response = await axios.post("http://localhost:8080/api/signup", 
                { username, password }, 
                { withCredentials: true }
            );

            if (response.status === 201) {
                setSuccess("Signup successful! Redirecting to login...");
                setTimeout(() => navigate('/login'), 2000); 
            }
        } catch (err) {
            setError(err.response?.data?.error || "Try another username!");
        }
    };

    return (
        <Card className="login-card">
            <Card.Body>
                <h2>Create Account</h2>
                <p>Already have an account? 
                    <Link to="/login" className="signup-link"> Log In </Link>
                </p>                
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
                    <Form.Group className="mb-3">
                        <Form.Control 
                            type="password" 
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <SignupBtn type="submit" />
                </Form>
                {success && <p className="success-text">{success}</p>}
                {error && <p className="error-text">{error}</p>}
            </Card.Body>
        </Card>
    );
}

export default SignupForm;
