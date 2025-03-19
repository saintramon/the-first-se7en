// Test program for xp-adder.js

const player = new XP();

console.log(player.getCurrentXP()); // 10 (initial XP)

player.completeQuest('easy');
console.log(player.getCurrentXP()); // 15 

player.useHint('letter');
console.log(player.getCurrentXP()); // 10 

player.recordIncorrectGuess();
player.recordIncorrectGuess();
player.recordIncorrectGuess(); // 3rd incorrect guess
console.log(player.getCurrentXP()); // 5 

player.completeBonusQuest();
console.log(player.getCurrentXP()); // 20 

player.useHint('removal');
console.log(player.getCurrentXP()); // 17

player.useHint('letter');
console.log(player.getCurrentXP()); // 12
player.useHint('letter');
console.log(player.getCurrentXP()); // 7
player.useHint('letter');
console.log(player.getCurrentXP()); // 2
player.useHint('letter');  // Insufficient XP. Current XP: 2. Needed XP: 5
console.log(player.getCurrentXP()); // 2