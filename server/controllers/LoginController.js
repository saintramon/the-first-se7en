const model = require('../models/LoginModel');

const index = (req, res) => {
    if (req.session.userID) {
        return res.status(200).json({
            message: "User already logged in", 
            redirect: "/home" 
        });
    }
    return res.status(200).json({
        message: "Successful connection to backend API."
    });
}

const validateUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({error: "User not found"});
        }

        const userID = await model.dbValidateUser(username, password);
        if (!userID) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        const currXP = await model.dbGetPlayerXP(userID);
        if (currXP === null || currXP === undefined) {
            return res.status(400).json({error: "Invalid userID"});
        }

        req.session.userID = userID;
        req.session.currXP = currXP;

        return res.status(200).json({
            message: "Login successful",
            user_id: req.session.userID,
            xp: req.session.currXP,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json(
            {error: "Error logging in. Please try again."}
        );
e   }
}

module.exports = {
    validateUser,
    index, 
};