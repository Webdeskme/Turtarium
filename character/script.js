const form = document.getElementById('character-form');
const characterInfo = document.getElementById('character-info');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const race = document.getElementById('race').value;
    const skill1 = document.getElementById('skill1').value;
    //const skill2 = document.getElementById('skill2').value;
    //const skill3 = document.getElementById('skill3').value;
    const disability = document.getElementById('disability').value;
    const lifeGoal = document.getElementById('life-goal').value;
    const backStory = document.getElementById('back-story').value;

    let strength = 5;
    let dexterity = 5;
    let intelligence = 5;
    let charisma = 5;

    switch (race) {
        case 'human':
            strength += 1;
            dexterity += 1;
            intelligence += 1;
            charisma += 1;
            break;
        case 'aviari':
            dexterity += 2;
            intelligence += 1;
            break;
        case 'haydori':
            strength += 2;
            charisma += 1;
            break;
        case 'merrows':
            strength += 2;
            agility += 1;
            break;
    }

    if (skill1 === 'strength') strength += 2;
    //if (skill2 === 'strength') strength += 2;
    //if (skill3 === 'strength') strength += 2;
    if (disability === 'strength') strength -= 2;

    if (skill1 === 'dexterity') agility += 2;
    //if (skill2 === 'agility') agility += 2;
    //if (skill3 === 'agility') agility += 2;
    if (disability === 'dexterity') agility -= 2;

    if (skill1 === 'intelligence') intelligence += 2;
    //if (skill2 === 'intelligence') intelligence += 2;
    //if (skill3 === 'intelligence') intelligence += 2;
    if (disability === 'intelligence') intelligence -= 2;

    if (skill1 === 'charisma') charisma += 2;
    //if (skill2 === 'charisma') charisma += 2;
    //if (skill3 === 'charisma') charisma += 2;
    if (disability === 'charisma') charisma -= 2;

    let characterDescription = `Your character is a ${race} with a goal to ${lifeGoal}. ${backStory}.`;
    let characterStats = `Strength: ${strength}, Dexterity: ${dexterity}, Intelligence: ${intelligence}, Charisma: ${charisma}`;

    characterInfo.innerHTML = `
        <h2>Character Description</h2>
        <p>${characterDescription}</p>
        <h2>Character Stats</h2>
        <p>${characterStats}</p>
    `;
});
