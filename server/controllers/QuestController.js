const model = require('../models/QuestModel');

const generateLetterSet = (answer) => {
    const randomLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let cleanAnswer = answer.replace(/[_\s]/g, "").toUpperCase(); // Remove spaces & underscores
    let letterSet = cleanAnswer.split(""); // Convert answer to an array of letters

    // Add random letters until letterSet length is 20
    while (letterSet.length < 20) {
        const randomIndex = Math.floor(Math.random() * randomLetters.length);
        letterSet.push(randomLetters[randomIndex]);
    }

    // Shuffle the letterSet
    for (let i = letterSet.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [letterSet[i], letterSet[j]] = [letterSet[j], letterSet[i]];
    }

    return letterSet;
};


const index = async (req, res) => {
    try {
        const questID = 5; // Hardcoded for testing
        const questInfoArray = await model.getQuestInformation(questID);

        if (!questInfoArray || questInfoArray.length === 0) {
            return res.status(404).json({ error: "Quest not found" });
        }

        const quest = questInfoArray[0];
        const letterSet = generateLetterSet(quest.questAnswer);

        res.status(200).json({
            message: "Quest retrieved successfully",
            difficulty: quest.questDifficulty,
            images: quest.questImages,
            answer: quest.questAnswer,
            letterSet: letterSet
        });

    } catch (error) {
        console.error("Error retrieving quest:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Placeholder functions to prevent "undefined" error
const submitAnswers = (req, res) => {
    res.status(200).json({ message: "Submit Answers - Not Implemented Yet" });
};

const revealLetter = (req, res) => {
    res.status(200).json({ message: "Reveal Letter - Not Implemented Yet" });
};

const removeLetter = (req, res) => {
    res.status(200).json({ message: "Remove Letter - Not Implemented Yet" });
};

module.exports = { index, submitAnswers, revealLetter, removeLetter };