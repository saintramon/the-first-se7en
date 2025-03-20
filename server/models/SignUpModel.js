const conn = require("../config/Database");

async function handleSignUp(username, password, xp = 10) {
    return new Promise((resolve, reject) => {
        // Check if username already exists
        const checkQuery = "SELECT COUNT(*) AS count FROM player WHERE username = ?";
        conn.query(checkQuery, [username], (err, results) => {
            if (err) {
                console.error("Database Error (Check Username):", err);
                return reject({ message: "Database error" });
            }

            if (results[0].count > 0) {
                return reject({ message: "Username already exists" });
            }

            // If username does not exist, insert new user
            const insertQuery = "INSERT INTO player (username, password, xp_level) VALUES (?, ?, ?)";
            conn.query(insertQuery, [username, password, xp], (err, result) => {
                if (err) {
                    console.error("Database Error (Insert User):", err);
                    return reject({ message: "Database error" });
                }
                resolve(result);
            });
        });
    });
}

module.exports = { handleSignUp };