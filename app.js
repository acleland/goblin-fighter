// import functions and grab DOM elements
import { renderGoblin, renderPlayerHP } from './utils.js';

const goblinsDiv = document.getElementById('goblinsDiv');
const playerHP = document.getElementById('playerHP');
const challengeGoblinForm = document.getElementById('challengeGoblin');
const challengeGoblinBtn = document.getElementById('goblinButton');

// let state

let goblinIdCounter = 3;
const goblinInitialHP = 3;

const player = {
    hp: 0,
};

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

// Challenge goblin event
challengeGoblinBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const goblinData = new FormData(challengeGoblinForm);
    const goblinName = goblinData.get('goblinName');
    if (goblinName) {
        const goblin = {
            id: goblinIdCounter,
            name: goblinName,
            hp: goblinInitialHP,
        };
        challengeGoblinForm.reset();
        goblinIdCounter++;
        goblins.push(goblin);
        displayGoblins();
    }
});


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
