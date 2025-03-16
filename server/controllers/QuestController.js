const model = require('../../models/QuestModel');

const index = async (req, res) => {
    try {
        const questID = req.session.questID;
        if (!questID) {
            return res.status(400).json({ error: "Quest ID is required" });
        }

        // Fetch quest details using async/await
        const questInfoArray = await model.getQuestInformation(questID);

        // If no quest found, return a 404 response
        if (!questInfoArray || questInfoArray.length === 0) {
            return res.status(404).json({ error: "Quest not found" });
        }

        // Extract the first (and only) quest from the array
        const quest = questInfoArray[0];

        // Send response to frontend
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

module.exports = {
    index
};