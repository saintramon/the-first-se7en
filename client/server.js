const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
    origin: ['https://localhost:5173']
};

app.use(cors(corsOptions));

app.get("/HelloWorld", (req, res) => {
    res.json({
        groupName : "The First Se7en" 
    })
});

app.listen(3000, () => {
    console.log("Client started on port 3000");
});

