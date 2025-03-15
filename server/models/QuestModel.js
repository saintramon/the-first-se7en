const {
    getQuestInfo : getQuestInfo,
    getQuestAnswer : getQuestAnswer,
} = require('./GameQueries')

function processQuestInfo(results) {
    if (!Array.isArray(results)) {
        console.error("Expected an array of results, but got:", results);
        return []; // Return an empty array if the data isn't in the expected format
    }

    return results.map(quest => ({
        questImages: [quest.img_1, quest.img_2, quest.img_3, quest.img_4], // Array of the images
        questAnswer: quest.answer,
        questDifficulty: quest.difficulty
    }));
}


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

function submitAnswers() {

}

function revealLetter() {

}

function removeLetter() {

}

module.exports = {
    getQuestInformation, submitAnswers, revealLetter, removeLetter
}