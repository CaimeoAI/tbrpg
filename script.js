
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

//! MAIN MENU OPTIONS FUNCTION

async function options() {
    let options = await inquirer.prompt({
        name: "choice",
        type: "list",
        message: "[Select]",
        choices: [
            "DISPLAY",
            "GRAPHICS",
            "SOUND",
            "DIFFICULTY",
            "ACCESSIBILITY"
        ]})
    
    switch(options.choice) {
        case "DISPLAY":
            break
        
        case "GRAPHICS":
            break
        
        case "SOUND":
            break

        case "DIFFICULTY":
            break
        
        case "ACCESSIBILITY":
            break
    }
}


//! GAME OVER FUNCTION

function gameOver() {
    console.log("\n \n GAME OVER \n \n");
    gameOver = true;
}

//! RANDOM PICKER FUNCTION

function randomPicker(x) {
    const pick = x[Math.floor(Math.random()*x.length)]
    return pick
}

//! REST HEAL FUNCTION

function restHeal() {
    playerStats.Health = maxHealth;
    console.log("You take a rest... \n \n");
    console.log(`You are completey healed back up to ${maxHealth}! \n \n`); 
}

//! REST FUNCTION

async function rest() {
    do {
    let rest = await inquirer.prompt({
        name: "choice",
        type: "list",
        message: "Select Action:",
        choices: [
            "Character Stats",
            "Inventory",
            "Rest to Heal",
            "Continue Journey"
        ]})

    switch(rest.choice) {

        case "Character Stats":
            console.clear()
            playerStatsShow()
            break

        case "Inventory":
            console.clear()
            break

        case "Rest to Heal":
            console.clear()
            restHeal()
            break

        case "Continue Journey":
            console.clear()
            restContinue = true
            break
    }
    }while(restContinue === false)
    
    restContinue = false
}

//! EVENT LIBRARY

// EVENT 01 THE OVERGROWN CHEST
const event01 = async function() {
    console.log("\n Right ahead of you, you see a very overgrown chest. As you draw closer to the chest, you feel the urge to find out what's inside of it.");
}

// EVENT 02 THE WOODEN SHACK
const event02 = async function() {
    console.log("\n You find a wooden shack in the woods. You notice that birds stopped singing and even the Insects don't seem to make any noises right now.");
}

// EVENT 03 THE MERCHANT 
const event03 = async function() {
    console.log("\n As you find your way through these woods, you encounter an old man carrying several backpacks.")
    console.log("\n 'Come closer!' he says.")
    console.log("\n 'Take a look at what I can offer you!");
}
    
let eventLibrary = [event01, event02, event03]

// Creates Random Number Between 1-10 and loads the corresponding event to that number
function eventGen() {
    const currentEventNumber = Math.ceil(Math.random())

    if(currentEventNumber === 1 && event01Done === false && gameOverSwitch === false) {

        

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

//! MAINFRAME

async function gameShell(){

    console.log("\n WELCOME TO THE TEXT-BASED RPG! \n");
    let startGame = await inquirer.prompt({
        name: "choice",
        type: "list",
        message: "[MAINMENU]\n",
        choices: [
            "START GAME",
            "OPTIONS",
            "QUIT GAME"
        ]})

    switch(startGame.choice) {

        case "START GAME":
            maingame()
            break

        case "OPTIONS":
            console.clear()
            await options()
            console.clear()
            gameShell()
            return

        case "QUIT GAME":
            break
    }

}

//! MAIN GAME FUNCTION

async function maingame() {

    //TODO Start of the Tutorial

    console.clear();
    console.log("\n You wake up in a dark prison cell with your right foot chained to the wall.");
    console.log("\n As you tried to break the chains that are binding you to these cold stone walls, you notice a saw right next to you.");
    console.log("\n You take saw into your hands. But what do you want to with it now? \n \n");

    do {

        let tutorialEvent01 = await inquirer.prompt({
            name: "choice",
            type: "list",
            message: "Select Action:",
            choices: [
                "Saw left foot off",
                "Saw right foot off",
                "Saw chain off",
                "Throw Saw away"
            ]});

        
        switch (tutorialEvent01.choice) {
            case "Saw left foot off":

                console.clear()
                console.log("\n After you saw your left foot off, you are still chained to the wall. Before you can think of anything else you die of blood loss...");
                gameOver()
                return

            case "Saw right foot off":

                console.clear()
                console.log("\n You managed to saw your right foot off and you are no longer chained to the wall. However before you muster the strength to stand up on you remaining foot, you die of blood loss...")
                gameOver()
                return
            
            case "Saw chain off":

                console.clear()
                console.log("\n After more than what felt like an eternity, you finally managed to saw through the thick chains. You stand up and walk up to the only door there is.");
                statIncrease(2,2)
                eventContinue = true;
                break

            case "Throw Saw away":

                console.clear()
                console.log("\n You throw the saw away. But after a while you pick it up again as you see no other tool that could help you in your current situation. \n");
                break
        }

    } while (eventContinue === false && gameOverSwitch === false)


    if (eventContinue === true) {

    console.log("\n You slowly open the door and walk through it and find yourself outside in the middle of a forest.");
    console.log("\n You take a long rest after spending so much energy on freeing yourself from the chains.");
    console.log("\n ...\n \n");

    }

    //TODO End of the Tutorial
    
    if (eventContinue === true && gameOverSwitch === false) {

        await rest()
        randomPicker(eventLibrary)
        
    }
}

gameShell()
    

