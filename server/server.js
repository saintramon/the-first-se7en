const express = require("express");
const app = express();
const cors = require("cors");

const gameQueries = require("./GameQueries")

const corsOptions = {
    origin: ['https://localhost:3000']
};

app.use(cors(corsOptions));


app.listen(8080, () => {
    console.log("Server started on port 8080");
});

app.get("/HelloWorld", (req, res) => {
    res.json({
        groupName : "The First Se7en" 
    })
});


