const { performQuery } = require('./GameQueries');

function handleSignUp(username, password) {
    return new Promise((resolve, reject) => {
        var query = "INSERT INTO player (username, password, xp_level) VALUES(?,?,?)";
        
        performQuery(query, [username, password, 10], (err, result) => {
            if (err) return reject(err);
            resolve(result); 
        });
    });
}

module.exports = { handleSignUp };
