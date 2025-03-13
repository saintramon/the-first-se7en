const express = require("express");
const app = express();
const cors = require("cors");
const conn = require("./Connection");

const corsOptions = {
    origin: ['http://localhost:3000', 'https://localhost:5173']
};
app.use(cors(corsOptions));


app.listen(8080, () => {
    console.log("Server started on port 8080");
    
});

app.get("/HelloWorld", (req, res) => {
    console.log('connecting attempt')
    res.json({
        groupName : "The First Se7en" 
    })
});

app.get("/", (req, res) => {
    console.log('connecting attempt')
    res.json({
        groupName : "The First Se7en" 
    })
});


