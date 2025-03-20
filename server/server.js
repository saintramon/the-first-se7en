const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const session = require('express-session');

const PORT = 8080;

/* Routers */
const signupRouter = require('./routes/SignupRoutes');
const loginRouter = require('./routes/LoginRoutes');
const homeRouter = require('./routes/HomeRoutes');
const instructionsRouter = require('./routes/InstructionsRoutes');
const questRouter = require('./routes/QuestRoutes');
const bonusQuestRouter = require('./routes/BonusQuestRoutes');

app.use(express.static(path.join(__dirname, "public")));

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));

app.use(cors({
    origin: 'http://localhost:3000', // send data to frontend
    credentials: true,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// To check if session is working. Comment out on production code fleece.
app.use((req, res, next) => {
    console.log("Session Data:", req.session);
    next();
});

// Routes
app.use('/api/signup', signupRouter);
app.use('/api/login', loginRouter);
app.use('/api/home', homeRouter);
app.use('/api/instructions', instructionsRouter);
app.use('/api/quest', questRouter);
app.use('/api/bonusQuest', bonusQuestRouter);

app.get('/api/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({
                error: "Logout failed"
            });
            
        }
        res.clearCookie('connect.sid');
        res.status(200).json({
            message: "Successfully logged out"
        })
    });
});

app.get("/api/", (req, res) => {
    console.log('connecting attempt')
    res.json({
        groupName : "The First Se7en" 
    })
});

app.listen(PORT, () => {
    console.log(`RUNNING SERVER AT http://localhost:${PORT}`);
});