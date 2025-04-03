const conn = require('../config/Database');

/** Internal Methods */
/** Used for all queries within this class. Params can be a param list enclosed in a [] */
function performQuery(query, params, callback) {
    conn.query(query, params, (err, results) => {
        if (err) {
            console.error("Query Error:", err);  // Log query error
            return callback(err, null);
        }
        console.log("Query Results:", results);  // Log query results
        return callback(null, results);
    });
}

/** Used for all updates within class. Params can be a param list enclosed in a []  */
function performUpdate(query, params, callback) {
    conn.query(query, params, (err, results) => {
        console.log(results);
        if (err) return callback(err, null);
        return callback(null, true);
    });
}

/*  For updating xp level of a player. Internal function. */
function xpOperation(playerID, amount, callback) {
    var query = "UPDATE player SET xp_level =? WHERE player_id =?";
    performUpdate(query, [amount, playerID], (err, results) => {
        if (err) {
            console.error("Error updating XP:", err);
            return callback(err, null);
        }

        getPlayerXP(playerID, (err, updatedXPResults) => {
            if (err) {
                console.error("Error fetching updated XP:", err);
                return callback(err, null);
            }

            console.log("Updated XP for player", playerID, ": " + updatedXPResults[0].xp_level);
            callback(null, updatedXPResults[0].xp_level);  // Corrected return to pass the XP back
        });
    });
}
/* Methods Pertaining to player table */
/*signup*/
async function signUp(username, password, xp = 10) {
    const query = "INSERT INTO player (username, password, xp_level) VALUES (?, ?, ?)";
    try {
        const result = await performQuery(query, [username, password, xp]);
        return { success: true, playerId: result.insertId };
    } catch (error) {
        throw new Error("Signup failed: " + error.message);
    }
}

/* Validates user account and returns the player_id of user */
function validateUser(username, password, callback) {
    var query = "SELECT player_id FROM player WHERE username=? AND password=?";
    return performQuery(query, [username, password], callback);
}

function getPlayerXP(playerID, callback) {
    var query = "SELECT xp_level FROM player WHERE player_id = ?";
    return performQuery(query, playerID, callback);
}

/* Update player xp given the difficulty of question
    Easy:   +5
    Medium: +10
    Hard:   +20
*/
function xpUP(playerID, questID, callback) {
    getQuestDifficulty(questID, (err, difficultyResults) => {
        if (err) {
            console.error("Error fetching quest difficulty:", err);
            return callback(new Error("Quest difficulty not found"), null);
        }

        const questDifficulty = difficultyResults[0].difficulty;

        getPlayerXP(playerID, (err, xpResults) => {
            if (err) {
                console.error("Error fetching player XP:", err);
                return callback(new Error("Player XP not found"), null);
            }

            let xp = xpResults[0].xp_level;

            switch (questDifficulty) {
                case "easy": xp += 5; break;
                case "medium": xp += 10; break;
                case "hard": xp += 20; break;
                default:
                    console.log("Unknown quest difficulty:", questDifficulty);
                    return callback(new Error("Unknown quest difficulty"), null);
            }

            console.log("NEW XP: " + xp);

            xpOperation(playerID, xp, (err, updatedXP) => {
                if (err) {
                    console.error("Error updating XP:", err);
                    return callback(err, null);
                }
                return callback(null, updatedXP);  // Return the updated XP value
            });
        });
    });
}


/* When a person gets three questions wrong minus xp. Default value 5 as per SRS. */
function xpDown(playerID, amount = 5, callback) {
    getPlayerXP(playerID, (err, results) => {
        if (err) return callback(err, null);

        let currentXP = results[0]?.xp_level || 0;  // Safely access xp_level
        if (currentXP < amount) {
            currentXP = 0;  // Prevent XP from going negative
        } else {
            currentXP -= amount;  // Subtract amount from current XP
        }

        console.log("XP DOWN - New XP: ", currentXP);

        // Update the player's XP
        const query = 'UPDATE player SET xp_level = ? WHERE player_id = ?';
        performUpdate(query, [currentXP, playerID], (err, results) => {
            if (err) return callback(err, null);
            callback(null, currentXP);  // Return the updated XP value
        });
    });
}

/* Methods Pertaining to quest table */

/* Get ALL the information associated with a quest */
function getQuestInfo(questID, callback) {
    var query = "SELECT * FROM quest WHERE quest_id = ?";
    return performQuery(query, questID, callback);
}

/* Get the 4 images associated with a quest id */
function getQuestImages(questID, callback) {
    var query = "SELECT img_1, img_2, img_3, img_4 FROM quest WHERE quest_id = ?";
    return performQuery(query, questID, callback);
}

/* Get answer given a quest id */
function getQuestAnswer(questID, callback) {
    var query = "SELECT answer FROM quest WHERE quest_id = ?";
    return performQuery(query, questID, callback);
}

/* Get difficulty given a quest id */
function getQuestDifficulty(questID, callback) {
    var query = "SELECT difficulty FROM quest WHERE quest_id = ?";
    return performQuery(query, questID, callback);
}

/* Methods Pertaining to bonus_quest table */

/* Get all the bonus quests associated with a quest ID */
function getBonusQuestID(questID, callback) {
    var query = "SELECT * FROM bonus_quest WHERE quest_id=?";
    return performQuery(query, questID, callback);
}

/* Get the question for the bonus quest */
function getBonusQuestInfo(bQuestID, callback) {
    var query = "SELECT add_answer FROM bonus_quest where b_quest_id=?";
    return performQuery(query, bQuestID, callback);
}

/* Get the answer of a bonus question (0,1) */
function getBonusQuestAns(bQuestID, callback) {
    var query = "SELECT bool_answer FROM bonus_quest where b_quest_id=?";
    return performQuery(query, bQuestID, callback);
}

module.exports =  {
    validateUser, getPlayerXP, xpUP, xpDown, getQuestImages, getQuestAnswer, 
    getQuestDifficulty, getBonusQuestID, getBonusQuestInfo, getBonusQuestAns, getQuestInfo, signUp, performQuery
}