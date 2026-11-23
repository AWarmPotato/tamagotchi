// info/state of the pet
let pet = {
    hunger: 100,
    happiness: 100,
};

//elements
const hungerBar = document.getElementById("hunger-bar");
const hungerText = document.getElementById("hunger-text");

const happinessBar = document.getElementById("happiness-bar");
const happinessText = document.getElementById("happiness-text");

const healthBar = document.getElementById("health-bar");
const healthText = document.getElementById("health-text");

//render the bars and make them red below 30
function render() {
    hungerBar.style.width = pet.hunger + "%"; 
    hungerText.textContent = pet.hunger + "%";

    happinessBar.style.width = pet.happiness + "%";
    happinessText.textContent = pet.happiness + "%";

    if (pet.hunger <= 30) {
        hungerBar.classList.add("critical");
    }   else {
        hungerBar.classList.remove("critical");
    }
    
    if (pet.happiness <= 30) {
        happinessBar.classList.add("critical");
    }   else {
        happinessBar.classList.remove("critical");
    }
}

render();