// import functions and grab DOM elements
import { renderGoblin, renderPlayerHP, renderScore } from './utils.js';

const goblinsDiv = document.getElementById('goblinsDiv');
const playerHP = document.getElementById('playerHP');
const challengeGoblinForm = document.getElementById('challengeGoblin');
const challengeGoblinBtn = document.getElementById('goblinButton');
const scoreDiv = document.getElementById('score');
const playerSprite = document.getElementById('playerSprite');


// Game constants and initial players

let goblinIdCounter = 0;
const goblinInitialHP = 3;
const goblinArmor = 2;
const playerArmor = 0;
let killedGoblins = 0;

let player;
let goblins;

// Init game function
function initGame() {
    goblinIdCounter = 2;
    killedGoblins = 0;

    player = {
        name: 'Adventurer',
        hp: 1,
        armor: playerArmor
    };

    goblins = [
        makeGoblin('Gorlug'),
        makeGoblin('Herclug')
    ];
}

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
    myAlert(playerAttackMessage);
    const goblinAttackMessage = attack(goblin, player);
    myAlert(goblinAttackMessage);
    if (goblin.hp === 0) {
        killedGoblins++;
    }
    
    displayAll();
    if (player.hp === 0) {
        gameOver();
    }
}

function onChallenge(e) {
    e.preventDefault();
    if (player.hp <= 0) {
        return;
    }
    const goblinData = new FormData(challengeGoblinForm);
    const goblinName = goblinData.get('goblinName');
    if (goblinName) {
        const goblin = makeGoblin(goblinName);
        challengeGoblinForm.reset();
        goblins.push(goblin);
        displayGoblins();
    }
}

// Challenge goblin event
challengeGoblinBtn.addEventListener('click', onChallenge);


// Display Functions
function displayGoblins() {
    goblinsDiv.innerHTML = '';
    for (let goblin of goblins) {
        const goblinDiv = renderGoblin(goblin);
        // Only add an event listener if the goblin and player is alive
        if ((goblin.hp > 0) && (player.hp > 0)) {
            goblinDiv.addEventListener('click', () => {
                attackGoblin(goblin);
            });
        }
        goblinsDiv.append(goblinDiv);
    }
}

function displayPlayerHP() {
    playerHP.textContent = renderPlayerHP(player);
}

function displayKillCount() {
    scoreDiv.textContent = renderScore(killedGoblins);
}

function displayAll() {
    displayKillCount();
    displayPlayerHP();
    displayGoblins();
}

function myAlert(message) {
    alert(message);
}

function gameOver() {
    playerSprite.classList.add('dead');
    document.getElementById('goblinInput').readOnly = true;
    myAlert('GAME OVER!!!');
}

initGame();
displayAll();

