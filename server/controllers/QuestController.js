const model = require('../models/QuestModel');

const generateLetterSet = (answer) => {
    const randomLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let letterSet = answer.toUpperCase().split(""); // Add answer letters

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

const removeLetter = (word, letters) => {
    let letterSet = letters.split("");
    let wordSplit = word.split("");

    let randomIndex = Math.getRandomIndex(0, 20);
    let letterToRemove = letterSet[randomIndex];

    let currLength = wordSplit.length;
    for (let x = 0; x < wordSplit.length; x++) {
        if (wordSplit[y] == letterSet[x]) {
            wordSplit.remove(wordSplit[y]); 
            break;
        }
    }
    if (wordSplit.length != currLength) return letterToRemove;
    else return removeLetter(word, letters);
}

const revealLetter = (word) => {
    index = Math.getRandomIndex(0, word.length);
    return letterInfo[word.split("")[index], index];
}

const index = async (req, res) => {
    try {
        const questID = 1; // Hardcoded for testing
        const questInfoArray = await model.getQuestInformation(questID);

        if (!questInfoArray || questInfoArray.length === 0) {
            return res.status(404).json( {error : "Message"});
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

const verifyAnswer = (req, res) => {
   // let correctAns = model.getQuestAnswer(req.questID);
   // let userAnswer = req.answer;
    if (model.getQuestAnswer(req.questID == req.answer)) {
        res.status(200).json({
            message: "Level Complete"
        });
    } else {
        let attempts = req.attempts + 1;
        res.status(200).json({
            message: "Incorrect Answer",
            attempts: attempts
        })
    }
    res.status(200).json({ message: "Submit Answers - Not Implemented Yet" });
};

const submitRevealLetter = (req, res) => {
    try {
        let revealedLetterIndex = revealLetter(req.word);
        res.send( { reveleadLetter : revealedLetterIndex[0],
            index : revealedLetterIndex[1]
        }); 
    } catch (Exception) {
        res.status(500).json( { message: "Error revealing letter."})
    }
   // res.status(200).json({ message: "Reveal Letter - Not Implemented Yet" });
};

const submitRemoveLetter = (req, res) => {
    removeLetter(req.word, req.letterSet);
    res.status(200).json({ message: "Remove Letter - Not Implemented Yet" });
};

module.exports = { 
    index, 
    verifyAnswer, 
    revealLetter : submitRemoveLetter, 
    removeLetter : submitRevealLetter
};