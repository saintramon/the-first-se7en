const { validateUser, getPlayerXP } = require('./GameQueries'); 

async function dbValidateUser(username, password) {
    return new Promise((resolve, reject) => {
        validateUser(username, password, (err, results) => {
            if (err) {
                console.error("DB Error:", err);
                return reject(err);
            } 
            console.log("DB Query Results:", results);
            if (!results || results.length == 0) {
                console.log("No user found for:", username);
                return resolve(null);
            }
            resolve(results[0].player_id);
        });
    });
}


async function dbGetPlayerXP(playerID) {
    return new Promise((resolve, reject) => {
        getPlayerXP(playerID, (err, results) => {
            if (err) {
                return reject(err);
            }
            if (!results || results.length == 0) {
                return resolve(null);
            }
            resolve(results[0].xp_level)
        });
    });
};

module.exports = {
    dbValidateUser, 
    dbGetPlayerXP, 
}