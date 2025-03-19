const {
    validateUser : validateUser,
    getPlayerXP : getPlayerXP,
} = require('./GameQueries');

function validateUser(username, password) {
    return new Promise((resolve, reject) => {
        validateUser(username, password, (err, results) => {
            if (err) {
                return reject(err);
            } 
            resolve(results);
        });
    });
};

function getPlayerXP(playerID) {
    return new Promise((resolve, reject) => {
        getPlayerXP(playerID, (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
};

module.exports = {
    validateUser, 
}