const {
    getQuestInfo : getQuestInfo,
    getQuestAnswer : getQuestAnswer,
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
function processAnswer(results) {
    // TODO:

}

function getQuestAnswerPromise(questID) {
    return new Promise((resolve, reject) => {
        getQuestAnswer(questID, (err, results) => {
            if (err) return reject(err);
            else {
                console.log("Raw results: ", results);
                const processedAnswer = processAnswer(results);
                resolve(processedAnswer);
            }
        });
    });
}


module.exports = {
    getQuestInformation, getQuestAnswer,
}