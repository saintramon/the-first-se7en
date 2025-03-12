const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const conn = require("./Connection");
const session = require('express-session');

app.use(express.static(path.join(__dirname, "public")));
app.use(cors({
    origin: 'http://localhost:5173', // send data to frontend
    credentials: true
}));
app.use(express.json()); // to process HTTPS requests

app.listen(8080, () => {
    console.log("Server started on port 8080");
});

