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

function updateXP(questionID, playerID, decision) {
    return new Promise((resolve, reject) => {
        if (decision == 'up') { 
            xpUP(playerID, questionID, (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        } else {
            xpDown(playerID, questionID, (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
        }
    });
}

module.exports = {
    getQuestInformation, getQuestAnswer,updateXP
}