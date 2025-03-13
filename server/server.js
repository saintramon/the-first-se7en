const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const conn = require("./Connection");
const session = require('express-session');

app.use(express.static(path.join(__dirname, "public")));
app.use(cors({
    origin: 'http://localhost:3000', // send data to frontend
    credentials: true
}));
app.use(express.json()); // to process HTTPS requests

app.get("/", (req, res) => {
    console.log('connecting attempt')
    res.json({
        groupName : "The First Se7en" 
    })
});


