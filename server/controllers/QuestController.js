const { response } = require('express');
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


const removeLetter = (word, letters) => {
    word = word.toUpperCase().split("");
   // let wordSplit = word.toUpperCase().split("");


    let randomIndex =  Math.floor(Math.random() * (letters.length) + 0);
    let condition = letters.includes(word[randomIndex]);
    console.log(randomIndex)
    let randomIndex2 = randomIndex;
    if (condition) {
        while (randomIndex2 != word.length-1) {
            randomIndex2 +=1;
            if (!condition) {
                return randomIndex2;
            }
        } while (randomIndex != 0) {
            randomIndex -=1;
            if (!condition) {
                return randomIndex;
            }
        }
    } else {
        return randomIndex;
    }   
}

const revealLetter = (word) => {
    let index =  Math.floor(Math.random() * (word.length - 0) + 0);
    let letterInfo = [word.split("")[index], index];
    if (letterInfo[0]== '_') {
        revealLetter(word);
    }
    return letterInfo;
}

const index = async (req, res) => {
    try {
        const questID = Math.floor(Math.random() * 20) + 1; 
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
    let answer = req.body.answer;
    try {
        let revealedLetterIndex = revealLetter(answer);
        res.status(200).json({ 
            message: "Letter Revealed",
            reveleadLetter : revealedLetterIndex[0].toUpperCase(),
            index : revealedLetterIndex[1]
        }); 
    } catch (Exception) {
       // res.status(500).json( { message: "Error revealing letter."})
    }
    
   
};

const submitRemoveLetter = (req, res) => {
    console.log("removing");
    
    let word = req.body.answer;
    let letterlist = req.body.letterList;
    try {
        console.log('removing x2')
        let toRemove = removeLetter(word, letterlist);
        console.log("to remove: ", toRemove)
        console.log(toRemove);
        res.status(200).json({
            message: "Letter removed",
            index: toRemove
        })
    } catch {
        res.status(500).json({ message: "Failed removing letter"})
    }
        
};

module.exports = { 
    index, 
    verifyAnswer, 
    revealLetter : submitRevealLetter,
    removeLetter : submitRemoveLetter, 
};