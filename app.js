// import functions and grab DOM elements
import { renderGoblin, renderPlayerHP } from './utils.js';

const goblinsDiv = document.getElementById('goblinsDiv');
const playerHP = document.getElementById('playerHP');
const challengeGoblinForm = document.getElementById('challengeGoblin');
const challengeGoblinBtn = document.getElementById('goblinButton');

// Game constants and initial players

let goblinIdCounter = 2;
const goblinInitialHP = 3;
const goblinArmor = 2;

const player = {
    name: 'Adventurer',
    hp: 5,
    armor: 5
};

// Goblin generator
function makeGoblin(name, hp = goblinInitialHP, armor = goblinArmor){
    goblinIdCounter++;
    return {
        id: goblinIdCounter,
        name: name,
        hp: hp,
        armor: armor
    };
}

let goblins = [
    makeGoblin('Gorlug'),
    makeGoblin('Herclug')
];



// Attack Goblin logic

function d20() {
    return Math.ceil(Math.random() * 20);
}

function attack(attacker, defender) {
    const roll = d20();
    if (roll > defender.armor) {
        defender.hp -= 1;
        if (defender.hp < 0) {
            defender.hp = 0;
        }
        return `${attacker.name} successfully hit ${defender.name}`;
    } else {
        return `${attacker.name} tried to hit ${defender.name} but missed!`;
    }
}

function attackGoblin(goblin) {
    const playerAttackMessage = attack(player, goblin);
    alert(playerAttackMessage);
    const goblinAttackMessage = attack(goblin, player);
    alert(goblinAttackMessage);
    displayPlayerStats();
    displayGoblins();
}

// Challenge goblin event
challengeGoblinBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const goblinData = new FormData(challengeGoblinForm);
    const goblinName = goblinData.get('goblinName');
    if (goblinName) {
        const goblin = makeGoblin(goblinName);
        challengeGoblinForm.reset();
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
