
//! VARIABLES

const prompt = require("prompt-sync")({sigint:false});
let eventContinue = false;
let playerGold = 0;

//! GAME OVER FUNCTION

function gameOver() {
    console.log("\n \n GAME OVER \n \n");
}

//! EVENT RANDOMIZER

// Creates Random Number Between 1-10 and loads the corresponding event to that number
function eventGen() {
    const currentEventNumber = Math.round(Math.random()*9+1)

    if(currentEventNumber === 1) {
        console.log("");
    }
}

//! MAINLOOP

console.log("\n WELCOME TO THE TEXT-BASED RPG! \n");
const startGame = prompt("Do you want to start the game? [y]/[n] ")

if(startGame === "y") {

    //TODO Start of the Tutorial

    console.log("\n You wake up in a dark prison cell with your right foot chained to the wall.");
    console.log("\n As you tried to break the chains that are binding you to these cold stone walls, you notice a saw right next to you.");
    console.log("\n You take saw into your hands. But what do you want to with it now? \n \n")

    do {

        let tutorialEvent01 = prompt("[a] Saw your left foot off [b] Saw your right foot off [c] Saw the the chain off [d] Throw the saw away       PICK A CHOICE: ")

        if (tutorialEvent01 === "a") {
            console.log("\n After you saw your left foot off, you are still chained to the wall. Before you can think of anything else you die of blood loss...");
            gameOver()
            break
        } else if (tutorialEvent01 === "b") {
            console.log("\n You managed to saw your right foot off and you are no longer chained to the wall. However before you muster the strength to stand up on you remaining foot, you die of blood loss...")
            gameOver()
            break
        } else if (tutorialEvent01 === "c") {
            console.log("\n After more than what felt like an eternity, you finally managed to saw through the thick chains. You stand up and walk up to the only door there is.");
            eventContinue = true;
        } else if (tutorialEvent01 === "d") {
            console.log("\n You throw the saw away. But after a while you pick it up again as you see no other tool that could help you in your current situation. \n");
        } else {
            console.log("\n Invalid Choice. Try using the letters corresponding to the given choices!");
        }

    } while (eventContinue===false)

    if (eventContinue===true) {

    console.log("\n You slowly open the door and walk through it and find yourself outside in the middle of a forest.");
    console.log("\n You take a long rest after spending so much energy on freeing yourself from the chains.");

    }
    
    //TODO End of the Tutorial

    for(i=0 ; i<10 ; i++) {
        eventGen()
    }

} else {
    console.clear()
}