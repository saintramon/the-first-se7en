const express = require("express");
const app = express();
const cors = require("cors");
const conn = require("./Connection");
const session = require('express-session');

app.use(express.static(path.join(__dirname, "public")));
app.use(cors({
    origin: 'https://localhost:5173', // send data to frontend
    credentials: true
}));
app.use(express.json()); // to process HTTPS requests

app.get("/HelloWorld", (req, res) => {
    res.json({
        groupName : "The First Se7en" 
    })
});

app.listen(8080, () => {
    console.log("Server started on port 8080");
});

