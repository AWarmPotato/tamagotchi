//Value's
const FEED_VALUE = 20;
const PLAY_VALUE = 15;
const CRITICAL_LIMIT = 30;

const TICK_INTERVAL = 5000;
const HUNGER_DECLINE = 2;
const HAPPINESS_DECLINE = 1;

// info/state of the pet
let pet = {
    name: "",
    hunger: 100,
    happiness: 100,
};

//elements
const nameError = document.getElementById("name-error");
const startButton = document.getElementById("start-button");

const cleanButton =  document.getElementById("clean-button");
const medicineButton = document.getElementById("medicine-button");

const playButton = document.getElementById("play-button");
const feedButton = document.getElementById("feed-button");

const hungerBar = document.getElementById("hunger-bar");
const hungerText = document.getElementById("hunger-text");

const happinessBar = document.getElementById("happiness-bar");
const happinessText = document.getElementById("happiness-text");

const healthBar = document.getElementById("health-bar");
const healthText = document.getElementById("health-text");

let gameTimer;

function tick() {
    pet.hunger = clamp(pet.hunger - HUNGER_DECLINE);
    pet.happiness = clamp(pet.happiness - HAPPINESS_DECLINE);
    render();
}

startButton.addEventListener("click", startGame);

function startGame() {
    const nameInput = document.getElementById("name-input").value.trim();
    const startScreen = document.getElementById("start-screen");
    const gameConsole = document.getElementById("console");

    if (nameInput === "") {
        nameError.classList.remove("hidden");
        return
    }   else {
        startScreen.classList.add("hidden");
        nameError.classList.add("hidden");
        gameConsole.classList.remove("hidden");
    }
    pet.name = nameInput;
    render();
    
    const gameTimer = setInterval(tick, TICK_INTERVAL);

}

//render the bars and make them red at 30 or lower
function render() {
    const finalName = document.getElementById("pet-name");
    finalName.textContent = pet.name;

    hungerBar.style.width = pet.hunger + "%"; 
    hungerText.textContent = pet.hunger + "%";

    happinessBar.style.width = pet.happiness + "%";
    happinessText.textContent = pet.happiness + "%";

    if (pet.hunger <= CRITICAL_LIMIT) {
        hungerBar.classList.add("critical");
    }   else {
        hungerBar.classList.remove("critical");
    }
    
    if (pet.happiness <= CRITICAL_LIMIT) {
        happinessBar.classList.add("critical");
    }   else {
        happinessBar.classList.remove("critical");
    }
}

render();

//make the bars not go below 0 or above 100
function clamp(value) {
    return Math.max(0, Math.min(100, value));
}

//feed button and play button
feedButton.addEventListener("click", feed);
playButton.addEventListener("click", play);


function feed() {
    pet.hunger = clamp(pet.hunger + FEED_VALUE);
    render();
}

function play() {
    pet.happiness = clamp(pet.happiness + PLAY_VALUE);
    render();
}