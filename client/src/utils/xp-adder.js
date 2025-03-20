class XP {
    constructor(){
        this.XP = 10;
        this.incorrectGuess = 0;
    }

    addXP(newXP){
        this.XP += newXP;
        return XP;
    }

    deductXP(newXP){
        if (this.XP >= newXP) {
            this.XP -= newXP;
            return true;
          }
          return false;
        }
    
    completeQuest(difficulty){
        const questRewards = {
            easy: 5,
            medium : 10,
            hard : 15
        };
        
        if (questRewards[difficulty]) {
            this.addXP(questRewards[difficulty])
        }
    }

    recordIncorrectGuess(){
        this.incorrectGuess++;

        if(this.incorrectGuess >= 3){
            this.XP -= 5 ;
            this.incorrectGuess = 0

        }
    }

    useHint(hintType){
        const hintCosts = {
            letter : 5,
            removal : 3,
        };

        if (hintCosts[hintType] && this.deductXP(hintCosts[hintType])){
            return true;
        }else {
            console.log(`Insufficient XP. Current XP: ${this.XP}. Needed XP: ${hintCosts[hintType]}`);
            return false;
        }
        
    }

    completeBonusQuest(){
        this.addXP(15)
    }

    getCurrentXP(){
        return this.XP
    }
    
}

