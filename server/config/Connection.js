const mysql = require('mysql2');

const conn = mysql.createPool({
    host: "database",       // As per the name set in the docker-compose
    user: "root",
    "password": "root",     // As per the password set in the docker-compose
    "database": "the-first-se7en",
    connectionLimit: 15,
    waitForConnections: true,
}) 

module.exports = conn