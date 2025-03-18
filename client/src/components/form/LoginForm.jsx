import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import './login_form.css';

function LoginForm() {
    return (
    <Card className="card">
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