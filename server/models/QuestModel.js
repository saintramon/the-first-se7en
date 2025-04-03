const {
    getQuestInfo : getQuestInfo,
    getQuestAnswer : getQuestAnswer,
    xpUP : xpUP,
    xpDown : xpDown,
} = require('../services/GameQueries')

function processQuestInfo(results) {
    if (!Array.isArray(results)) {
        console.error("Expected an array of results, but got:", results);
        return []; // Return an empty array if the data isn't in the expected format
    }

    return results.map(quest => ({
        questImages: [quest.img_1, quest.img_2, quest.img_3, quest.img_4], // Images of the quest
        questAnswer: quest.answer,
        questDifficulty: quest.difficulty
    }));
}

/**
 * Returns a promise of the infromation of a certain quest
 */
function getQuestInformation(questID) {
    return new Promise((resolve, reject) => {
        getQuestInfo(questID, (err, results) => {
            if(err){
                return reject(err);
            }

            console.log("Raw results: ", results);
            const processedQuestInfo = processQuestInfo(results);
            resolve(processedQuestInfo);
        })
    })
}

// Deprecated function, for now.
// function processAnswer(results) {
//     // TODO:

// }
function updateXP(questID, playerID, decision) {
    return new Promise((resolve, reject) => {
        // Convert to integers if they're strings
        playerID = parseInt(playerID, 10);
        questID = parseInt(questID, 10);
        
        console.log("Model updateXP called with:", {
            questID, 
            playerID, 
            decision,
            playerIDType: typeof playerID,
            questIDType: typeof questID
        });

        if (decision === 'up') {
            xpUP(playerID, questID, (err, updatedXP) => {
                if (err) {
                    console.error("Error in xpUP:", err);
                    return reject(err);
                }
                console.log("XP increased successfully:", updatedXP);
                resolve(updatedXP);
            });
        } else if (decision === 'down') {
            // If you've fixed xpDown to use callback pattern:
            xpDown(playerID, 5, (err, updatedXP) => {
                if (err) {
                    console.error("Error in xpDown:", err);
                    return reject(err);
                }
                console.log("XP decreased successfully:", updatedXP);
                resolve(updatedXP);
            });
        } else {
            reject(new Error('Invalid decision: ' + decision));
        }
    });
}

module.exports = {
    getQuestInformation, getQuestAnswer,updateXP
}