const model = require('../controllers/LoginController');

const index = async (req, res) => {
    try {
        const playerID = req.session.playerID;
        if (playerID == null) {

        } else {
            res.sen
        }
    } catch (error) {
        console.error("Error: 404 Not Found");
        res.status(400);
    }
}

module.exports = index;


function validateUser(username, password) {
    try {
        const playerID = req.session.playerID;
        if (playerID == null) {

        }
    } catch () {

    }
}