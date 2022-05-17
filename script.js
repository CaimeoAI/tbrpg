
//! VARIABLES

const inquirer = require("inquirer")
const prompt = require("prompt-sync")({sigint:false});

let eventContinue = false;
let playerGold = 0;

let maxHealth = 10;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 

let restChoice;
let restContinue = false;
let event01Done = false;
let gameOverSwitch = false;

//! PLAYER STATS OBJECT DECLARATION and PLAYER STAT FUNCTIONS

let playerStats = {
    MaxHealth: maxHealth,
    Health: 10,
    Strength: 5,
    Dexterity: 5,
    Speed: 5,
    Intelligence: 5,
}

function playerStatsShow() {
    console.log("\n");
    console.table(playerStats);
    console.log("\n");
}

function statIncrease(stat,num) {
    let placeholder = Object.keys(playerStats)[stat] // Getting the key according to the index number
    console.log(`\n You gained ${num} additional Points in ${placeholder}! \n`);
    playerStats[placeholder] += 2
}

//! GAME OVER FUNCTION

function gameOver() {
    console.log("\n \n GAME OVER \n \n");
    gameOver = true;
}

//! INVALID CHOICE FUNCTION

function invaidChoice() {
    console.log("\n Invalid Choice. Try using the letters corresponding to the given choices!");
}

//! REST HEAL FUNCTION

function restHeal() {
    playerStats.Health = maxHealth;
    console.log("You take a rest... \n \n");
    console.log(`You are completey healed back up to ${maxHealth}! \n \n`); 
}

//! REST FUNCTION

function rest() {

    do {

        console.log("You are resting. \n");
        console.log("[c]Character Stats");
        console.log("[i]Inventory");
        console.log("[r]Rest to heal");
        console.log("[w]Continue Journey \n \n");

        restChoice = prompt("What do you want to do?       PICK A CHOICE:");
        console.log(restChoice);
        if (restChoice === "c") {
            console.clear();
            playerStatsShow();
        } else if (restChoice === "i") {
            console.clear();           // TODO UNDER CONSTRUCTION
        } else if (restChoice === "r") {
            console.clear();
            restHeal();
        } else if (restChoice === "w") {
            restContinue = true;
            console.clear();
            console.log("\n You get up and continue your Journey... \n");
        } else {
            console.clear();
            invaidChoice();
        }

    } while (restContinue === false); 

}

//! EVENT RANDOMIZER

// TODO Make events into an array and randomize which element it should take out of the array. Helps with deleting Events easier
// let eventLibrary = [event01, event02, event03]

// function eventPicker() {}
    

// Creates Random Number Between 1-10 and loads the corresponding event to that number
function eventGen() {
    const currentEventNumber = Math.ceil(Math.random())

    if(currentEventNumber === 1 && event01Done === false && gameOverSwitch === false) {

        console.log("\n You encounter a crossroad. There are three ways to ahead of you.");

        do {

            console.log("\n The left side road looks completely overgrown. The one straight ahead is plastered with red stone bricks. And the one to the right seems to lead deeper into the woods. \n \n");
            
            let event01 = prompt("[a] Take left road [b] Take road ahead [c] Take right road [d] Turn back      PICK A CHOICE:")

            if (event01 === "a") {
                break
            } else if (event01 === "b") {
                event01Done = true;
            } else if (event01 === "c") {
                break
            } else if (event01 === "d") {
                break
            } else {
                invaidChoice()
            }

        } while (event01Done === false)
        
    }
}

//! MAINLOOP

console.log("\n WELCOME TO THE TEXT-BASED RPG! \n");
const startGame = prompt("Do you want to start the game? [y]/[n] ")

if(startGame === "y") {

    //TODO Start of the Tutorial

    console.clear();
    console.log("\n You wake up in a dark prison cell with your right foot chained to the wall.");
    console.log("\n As you tried to break the chains that are binding you to these cold stone walls, you notice a saw right next to you.");
    console.log("\n You take saw into your hands. But what do you want to with it now? \n \n");

    do {
        
        let tutorialEvent01 = prompt("[a] Saw your left foot off [b] Saw your right foot off [c] Saw the the chain off [d] Throw the saw away       PICK A CHOICE: ");

        if (tutorialEvent01 === "a") {
            console.clear()
            console.log("\n After you saw your left foot off, you are still chained to the wall. Before you can think of anything else you die of blood loss...");
            gameOver()
            break
        } else if (tutorialEvent01 === "b") {
            console.clear()
            console.log("\n You managed to saw your right foot off and you are no longer chained to the wall. However before you muster the strength to stand up on you remaining foot, you die of blood loss...")
            gameOver()
            break
        } else if (tutorialEvent01 === "c") {
            console.clear()
            console.log("\n After more than what felt like an eternity, you finally managed to saw through the thick chains. You stand up and walk up to the only door there is.");
            statIncrease(2,2)
            eventContinue = true;
        } else if (tutorialEvent01 === "d") {
            console.clear()
            console.log("\n You throw the saw away. But after a while you pick it up again as you see no other tool that could help you in your current situation. \n");
        } else {
            invaidChoice()
        }

    } while (eventContinue === false && gameOverSwitch === false)

    if (eventContinue === true) {

    console.log("\n You slowly open the door and walk through it and find yourself outside in the middle of a forest.");
    console.log("\n You take a long rest after spending so much energy on freeing yourself from the chains.");
    console.log("\n ...\n \n");

    }
    
    //TODO End of the Tutorial
    
    if (eventContinue === true && gameOverSwitch === false) {

        rest()
  
        eventGen()
        
    }

} else {
    console.clear()
}