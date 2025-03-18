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
const signupRouter = require('./routes/Signup');
const loginRouter = require('./routes/Login');
const homeRouter = require('./routes/Home');
const instructionsRouter = require('./routes/Instructions');
const questRouter = require('./routes/Quest');
const bonusQuestRouter = require('./routes/BonusQuest');

app.use(express.static(path.join(__dirname, "public")));
app.use(cors({
    origin: 'http://localhost:3000', // send data to frontend
    credentials: true
}));
app.use(express.json);
app.use(express.urlencoded({extended: true}));

// Routes
app.use('/api/signup', signupRouter);
app.use('/api/login', loginRouter);
app.use('/api/home', homeRouter);
app.use('/api/instructions', instructionsRouter);
app.use('/api/quest', questRouter);
app.use('/api/bonusQuest', bonusQuestRouter);

app.get('/api/logout', (req, res) => {
    // TODO
});

app.get("/api/", (req, res) => {
    console.log('connecting attempt')
    res.json({
        groupName : "The First Se7en" 
    })
});

app.listen(PORT, () => {
    console.log(`RUNNING SERVER AT http://localhost:${PORT}`);
})