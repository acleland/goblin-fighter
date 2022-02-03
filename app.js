// import functions and grab DOM elements
import { renderGoblin, renderPlayerHP } from './utils.js';

const goblinsDiv = document.getElementById('goblinsDiv');
const playerHP = document.getElementById('playerHP');

// let state

const player = {
    hp: 0,
};

let goblins = [
    {
        name: 'Gorlug',
        hp: 4,
    },
    {
        name: 'Herclug',
        hp: 2,
    }
];


// Display Functions
function displayGoblins() {
    goblinsDiv.innerHTML = '';
    for (let goblin of goblins) {
        goblinsDiv.append(renderGoblin(goblin));
    }
}

function displayPlayerStats() {
    playerHP.textContent = renderPlayerHP(player);
}

displayPlayerStats();
displayGoblins();




// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
