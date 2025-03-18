const model = require('../models/QuestModel');

const index = async (req, res) => {
    try {
        const questID = 1; // Hardcoded for testing
        const questInfoArray = await model.getQuestInformation(questID);

        if (!questInfoArray || questInfoArray.length === 0) {
            return res.status(404).json({ error: "Quest not found" });
        }

        const quest = questInfoArray[0];

        res.status(200).json({
            message: "Quest retrieved successfully",
            difficulty: quest.questDifficulty,
            images: quest.questImages,
            answer: quest.questAnswer
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