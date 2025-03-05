var mysql = require('mysql2/promise');

const conn = mysql.createPool({
    host: "database",       // As per the name set in the docker-compose
    user: "root",
    "password": "root",     // As per the password set in the docker-compose
    "database": "the-first-se7en",
    connectionLimit: 15,
    waitForConnections: true,
}) 

// Function to print status of SQL connection
async  function testConnection() {
    try {
        const connection = await conn.getConnection();
        console.log("MySQL Connection Established.");
        connection.release(); // Return the connection back to the pool
    } catch (err) {
        console.log("Error in establishing MySQL Connection.")
    }
}

testConnection()

/* For testing if dockerization was done properly. Can delete or move to queries file when created */
async function validateUser(username, password) {
    try {
        const query = "SELECT player_id, password FROM player WHERE username=?";
        const [rows] = await conn.query(query, [username]);

        if (rows.length === 0) return false; // No user found

        const user = rows[0];
        const isPasswordValid = await password === user.password;  //await bcrypt.compare(password, user.password); <- If we opt to hash our passwords
        
        return isPasswordValid ? user.first_name : false; // Return user data or false
    } catch (err) {
        console.error("Database Error:", err);
        return false;
    }
}



module.exports = conn