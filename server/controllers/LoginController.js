const model = require('../models/LoginModel');

const index = (req, res) => {
    if (req.session.userID) {
        return res.status(200).json({
            message: "User already logged in", 
            redirect: "/home" 
        });
    }
    res.status(200).json({
        message: "Successful connection to backend API."
    });
}

const validateUser = async (req, res) => {
    try {
        const {username, password } = req.body;

        if (username == null || password == null) {
            res.status(400).json({error: "User not found"});
        }
        const userID = await model.validateUser(username, password);
        if (!userID) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        req.session.userID = userID;

        res.status(200).json({
            message: "Login successful",
            user_id: req.session.userID
        });
    } catch (error) {
        res.status(500).json(
            {error: "Error logging in. Please try again."}
        )
    }
}

module.exports = {
    validateUser,
    index, 
};