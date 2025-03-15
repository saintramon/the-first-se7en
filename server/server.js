const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const conn = require("./config/Connection");
const session = require('express-session');
const http = require('http');
const gameQueries = require("./models/GameQueries")

const PORT = 8080;

/* Routers */
const sigupRouter = require('./routes/Signup');
const loginRouter = require('./routes/Login');
const homeRouter = require('./routes/Home');
const instructionsRouter = require('./routes/Instructions');
const questRouter = require('./routes/Quest');
const bonusQuestRouter = require('./routes/BonusQuest');


const corsOptions = {
    origin: ['https://localhost:3000']
};

app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, "public")));
app.use(cors({
    origin: 'http://localhost:3000', // send data to frontend
    credentials: true
}));

//app.use(express.json()); // to process HTTPS requests



app.use('/signup', sigupRouter);
//app.use('/login', loginRouter);
app.use('/home', homeRouter);
app.use('/instructions', instructionsRouter);
app.use('/quest', questRouter);
app.use('/bonusQuest', bonusQuestRouter);

app.get('/logout', (req, res) => {
    //TODO: Logout
});

app.get("/", (req, res) => {
    console.log('connecting attempt')
    res.json({
        groupName : "The First Se7en" 
    })
});

app.listen(PORT, () => {
    console.log(`RUNNING SERVER AT http://localhost:${PORT}`);
})





