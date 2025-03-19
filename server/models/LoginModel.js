const {
    validateUser : dbValidateUser,
    getPlayerXP : dbGetPlayerXP,
} = require('./GameQueries');

function validateUser(username, password) {
    return new Promise((resolve, reject) => {
        dbValidateUser(username, password, (err, results) => {
            if (err) {
                return reject(err);
            } 
            if (!results || results.length == 0) {
                return resolve(null);
            }
            resolve(results[0].userID);
        });
    });
};

function getPlayerXP(playerID) {
    return new Promise((resolve, reject) => {
        dbGetPlayerXP(playerID, (err, results) => {
            if (err) {
                return reject(err);
            }
            if (!results || results.length == 0) {
                return resolve(null);
            }
            resolve(results[0].xp)
        });
    });
};

module.exports = {
    validateUser, getPlayerXP 
}