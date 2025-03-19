const { handleSignUp } = require('../models/SignUpModel');

async function signUpController(req, res) {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: "All fields are required!" });
    }

    try {
        const result = await handleSignUp(username, password);
        return res.status(201).json({ message: "User registered successfully", result });
    } catch (error) {
        console.error("Signup error:", error);
        return res.status(500).json({ error: error.message });
    }
}

module.exports = { signUpController };
