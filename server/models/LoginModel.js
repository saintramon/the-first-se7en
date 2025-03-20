const { validateUser, getPlayerXP } = require('./GameQueries'); 

async function dbValidateUser(username, password) {
    return new Promise((resolve, reject) => {
        validateUser(username, password, (err, results) => {
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

async function dbGetPlayerXP(playerID) {
    return new Promise((resolve, reject) => {
        getPlayerXP(playerID, (err, results) => {
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
    dbValidateUser, 
    dbGetPlayerXP, 
}