const { handleSignUp } = require('../models/SignUpModel');

async function signUpController(req, res) {
    console.log("Received signup request:", req.body); 

    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ error: "All fields are required!" });

    try {
        const result = await handleSignUp(username, password, 10);
        res.status(201).json({ message: "User registered successfully", userId: result.insertId });
    } catch (error) {
        res.status(400).json({ error: "Signup failed" });
    }
}

module.exports = { signUpController };


