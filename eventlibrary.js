
//! EVENT LIBRARY

// EVENT 01 THE OVERGROWN CHEST
const event01 = async function() {
    console.log("\n Right ahead of you, you see a very overgrown chest. As you draw closer to the chest, you feel the urge to find out what's inside of it.\n \n");
    
    let event01menu = await inquirer.prompt({
        name: "choice",
        type: "list",
        message: "Select action:",
        choices: [
            "Open the chest",
            "Leave the chest be",
            "Inspect the chest"
        ]})

    switch(event01menu.choice) {
        case "Open the chest":
            break
        case "Leave the chest be":
            break
        case "Inspect the chest":
            break
    }
}

// EVENT 02 THE WOODEN SHACK
const event02 = async function() {
    console.log("\n You find a wooden shack in the woods. You notice that birds stopped singing and even the Insects don't seem to make any noises right now.\n \n");

    let event02menu = await inquirer.prompt({
        name: "choice",
        type: "list",
        message: "Select action:",
        choices: [
            "Enter the wooden shack",
            "Look through the window",
            "Inspect surroundings",
            "Run away"
        ]})

    switch(event02menu.choice) {
        case "Enter the wooden shack":
            break
        case "Look through the window":
            break
        case "Inspect surroundings":
            break
        case "Run away":
            break
    }
}

// EVENT 03 THE MERCHANT 
const event03 = async function() {
    console.log("\n As you find your way through these woods, you encounter an old man carrying several backpacks.\n \n")
    console.log("\n 'Come closer!' he says.")
    console.log("\n 'Take a look at what I can offer you!' \n");

    let event03menu = await inquirer.prompt({
        name: "choice",
        type: "list",
        message: "Select action:",
        choices: [
            "Buy items",
            "Sell items",
            "Character Stats",
            "Leave"
        ]})
}
    
let eventLibrary = [event01, event02, event03]

module.exports = eventLibrary