export function getP(text) {
    const p = document.createElement('p');
    p.textContent = text;
    return p;
}


export function renderGoblin(goblin) {
    const div = document.createElement('div');
    div.classList.add('goblin');
    div.append(getP(goblin.name));
    div.append(getP((goblin.hp > 0) ? '😈' : '💀'));
    div.append(getP(goblin.hp));
    return div;
}

export function renderPlayerHP(player) {
    return `Your HP: ${player.hp}`;
}

export function renderScore(score) {
    return `Goblins defeated: ${score}`;
}
