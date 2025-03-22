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
    wordSplit = word.toUpperCase().split("");
   // let wordSplit = word.toUpperCase().split("");


    let randomIndex =  Math.floor(Math.random() * (letters.length) + 0);
    if (!wordSplit.includes(letters[randomIndex])) {
        return randomIndex;
    } else {
        return removeLetter(word, letters);
    }
}

const revealLetter = (word) => {
    let index =  Math.floor(Math.random() * (word.length - 0) + 0);
    let letterInfo = [word.split("")[index], index];
    if (letterInfo[0]== '_') {
        revealLetter(word);
    } else {
        if (word.includes("_")) {
            letterInfo[1] +=1;
        } else {
            return letterInfo;

        }
    }
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
const updateXP = (req, res) => {
    console.log("UPDATE XP");

    let playerID = req.body.playerID;
    let questID = req.body.questID;
    let decision = req.body.decision;

    model.updateXP(questID, playerID, decision)
        .then((results) => {
            console.log("XP Updated: ", results);
            
            // Extract the updated XP value from results
            const updatedXP = results.newXP || results.xp || results;
            
            // Return the updated XP value to the frontend
            res.status(200).json({ 
                message: "XP Updated",
                updatedXP: updatedXP
            });
        })
        .catch((error) => {
            console.error("Error updating XP: ", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    );
}

const submitRemoveLetter = (req, res) => {
    console.log("removing");
    
    let word = req.body.answer;
    let letterlist = req.body.letterList;
    try {
        console.log(letterlist)
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
    updateXP, 
    revealLetter : submitRevealLetter,
    removeLetter : submitRemoveLetter, 
};