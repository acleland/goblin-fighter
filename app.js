// import functions and grab DOM elements
import { renderGoblin, renderPlayerHP } from './utils.js';

const goblinsDiv = document.getElementById('goblinsDiv');
const playerHP = document.getElementById('playerHP');

// let state

const player = {
    hp: 0,
};

let goblinIdCounter = 3;

let goblins = [
    {
        id: 0,
        name: 'Gorlug',
        hp: 4,
    },
    {
        id: 1,
        name: 'Herclug',
        hp: 2,
    }
];


// Attack Goblin logic
function attackGoblin(goblin) {
    console.log(`hi my name is ${goblin.name} and my id is ${goblin.id}`);
}

// Display Functions
function displayGoblins() {
    goblinsDiv.innerHTML = '';
    for (let goblin of goblins) {
        const goblinDiv = renderGoblin(goblin);
        goblinDiv.addEventListener('click', () => {
            attackGoblin(goblin);
        });
        goblinsDiv.append(goblinDiv);
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
