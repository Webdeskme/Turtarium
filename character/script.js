const form = document.getElementById('character-form');
const characterInfo = document.getElementById('character-info');

const missionInfo = document.getElementById('mission-info');

const missionTypes = {
    rescue: {
        missions: [
            "Rescue the captured scientist from the enemy's secret laboratory.",
            "Save the hostages from the terrorist's hideout.",
            "Extract the injured soldier from the battlefield.",
            "Retrieve the stolen valuable artifact from the thief's lair.",
            "Evacuate the civilians from the war-torn city."
        ],
        rewards: [
            "1000 gold and a boost to your reputation",
            "500 gold and a new piece of equipment",
            "2000 gold and a chance to recruit a new ally",
            "1500 gold and a valuable resource",
            "2500 gold and a unique item"
        ]
    },
    infiltration: {
        missions: [
            "Infiltrate the enemy's headquarters to gather intel on their plans.",
            "Sneak into the high-security facility to steal the top-secret documents.",
            "Go undercover to gather information on the enemy's operations.",
            "Infiltrate the enemy's communication network to disrupt their communications.",
            "Sneak into the enemy's base to sabotage their equipment."
        ],
        rewards: [
            "2000 gold and a new piece of equipment",
            "1500 gold and a valuable resource",
            "1000 gold and a boost to your reputation",
            "2500 gold and a unique item",
            "3000 gold and a chance to recruit a new ally"
        ]
    },
    sabotage: {
        missions: [
            "Sabotage the enemy's equipment to disrupt their operations.",
            "Destroy the enemy's supply chain to weaken their forces.",
            "Disable the enemy's defenses to create an opening for attack.",
            "Disrupt the enemy's communication network to create confusion.",
            "Sabotage the enemy's transportation to limit their mobility."
        ],
        rewards: [
            "1500 gold and a valuable resource",
            "1000 gold and a boost to your reputation",
            "2000 gold and a new piece of equipment",
            "2500 gold and a unique item",
            "3000 gold and a chance to recruit a new ally"
        ]
    },
    reconnaissance: {
        missions: [
            "Conduct a reconnaissance mission to gather intel on the enemy's positions.",
            "Gather information on the enemy's troop movements and deployments.",
            "Identify the enemy's weaknesses and vulnerabilities.",
            "Map out the enemy's territory to plan a future attack.",
            "Gather intel on the enemy's plans and strategies."
        ],
        rewards: [
            "1000 gold and a boost to your reputation",
            "500 gold and a new piece of equipment",
            "2000 gold and a chance to recruit a new ally",
            "1500 gold and a valuable resource",
            "2500 gold and a unique item"
        ]
    }
};
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const race = document.getElementById('race').value;
    const skill1 = document.getElementById('skill1').value;
    //const skill2 = document.getElementById('skill2').value;
    //const skill3 = document.getElementById('skill3').value;
    const disability = document.getElementById('disability').value;
    const lifeGoal = document.getElementById('life-goal').value;
    const backStory = document.getElementById('back-story').value;
    const missionType = document.getElementById('mission-type').value;
    const mission = missionTypes[missionType].missions[Math.floor(Math.random() * missionTypes[missionType].missions.length)];
    const reward = missionTypes[missionType].rewards[Math.floor(Math.random() * missionTypes[missionType].rewards.length)];

    let strength = 5;
    let dexterity = 5;
    let intelligence = 5;
    let charisma = 5;
    let gold = 1000;

    switch (race) {
        case 'human':
            dexterity -= 1;
            intelligence += 1;
            charisma += 1;
            break;
        case 'aviari':
            dexterity += 2;
            charisma += 1;
            intelligence -= 1;
            break;
        case 'haydori':
            strength += 2;
            dexterity += 2;
            charisma -= 1;
            break;
        case 'merrows':
            strength += 2;
            charisma += 1;
            dexterity -= 1;
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
    let bs = '';
    if(backStory == 'orphaned'){
		bs = 'Orphaned after parrents went missing at very early age, your charecter has had to learn much of what they knows from hard life experiances.';
	}
	if(backStory == 'fisherman'){
		bs = 'Curently a fishermen, but feeling a calling greater then fishing. While your charecter can not give up his day job they looks for more anytime they can.';
	}
	if(backStory == 'retired'){
		bs = 'Just retired after many years of working, your charecter is now ready to do something new with rest of their life.';
	}
	if(backStory == 'student'){
		bs = 'Your charecter is a student in need of a final theses and is about to embark on a journey to discover what that will be. As a student you do not have a lot of money, but what you lack in money you make up for in high spirits.';
	}
	let rc = '';
    if(race == 'human'){
		rc = 'Like Merrows are not very versital biologicly speaking. They can not fly or swim well, or live underwater outside of the underwater Haydori cities. What they lack in naturally ability they make up for in intelegance. They are very resourcefull and can build things to help them suceed.';
	}
	if(race == 'aviari'){
		rc = 'Part reptile and part bird. This race is able to take to the skies. They do not like to get wet, which has been a major disadvantage for a planet that is technically all ocean.';
	}
	if(race == 'haydori'){
		rc = 'Half Amphibian and half Fish, the Haydori can live both in the water and out. These creatures stand on two flipers like legs like humans, but are also great swimmers.';
	}
	if(race == 'merrows'){
		rc = 'Mermaid and Merman. A race that look a lot like humans from the waist up, but are very much a fish from the waist down and are unable to be out of the water for very long. When in the water though, they are fast and agile.';
	}
    let characterDescription = `Your character is a ${race} with a goal to be ${lifeGoal}. ${bs}`;
    let characterStats = `Strength: ${strength}, Dexterity: ${dexterity}, Intelligence: ${intelligence}, Charisma: ${charisma}, Wealth: ${gold}gold, Health: 10`;

    characterInfo.innerHTML = `
		<h1>Next Steps:</h1>
		<ul>
			<li>Come up with a name for your charecter.</li>
			<li>Write down your charecters description and stats. This is a good point to flesh out your charecter some more.</li>
			<li>Write down your charecters first mission and what the reward will be if they finish. This is a longterm goal for your charecter.</li>
			<li>If this charecter is your main charecter, remeber to do this three more times for the crew of your ship.</li>
			<li>When you are ready, <a href="../cities/bellhorn.html">head to Bellhorn</a> (your home town).</li>
		</ul>
        <h1>Character Description</h1>
        <p>${characterDescription}</p>
        <p><b>Note: If this is your main charecter, they live in the town of Bellhorn and own their own ship. The ship you captain starts with three crew members you go out on the seas with.</b></p>
        <h3>Character Stats</h3>
        <p>${characterStats}</p>
        <h3>First Mission</h3>
        <p>${mission}</p>
        <h3>Mission Reward</h3>
        <p>${reward}</p>
        <h1>More information</h1>
        <h3>${race}:</h3>
        <p>${rc}</p>
        <img src="../encyclopedia/images/${race}.png" alt="race image" style="width:50%;">
        <h4>Stregth, Decterity, Intelligence, Charisma, and Wealth determin if you can purform cirtian actions or complete certian quests.</h4>
        <h3>Strength:</h3>
        <p>Strength represents your charecters physical abilities and also there endurance.</p>
        <h3>Dexterity:</h3>
        <p>Dexterity determins how quickly you can react to a situation.</p>
        <h3>Intelligence:</h3>
        <p>Intelligence has to do with your charecters abillity to come up with creative solutions to problems.</p>
        <h3>Charisma:</h3>
        <p>Charisma is your ability to talk your way out of any situation.</p>
        <h3>Wealth:</h3>
        <p>Sometimes money is the answere and you will need it to get something you want or need.</p>
        <h3>Health:</h3>
        <p>Your health determins things like if you are injured, feeling great, or dead. Make sure when your health changes you explain how so in detail in your story.</p>
        <h1>Rules</h1>
        <h3>Setup:</h3>
        <ul>
			<li>Find somewere to write down your adventure, whether it is a notebook, or a word doc, as long as you are comfortable writing there.</li>
			<li>Click "Begin" on the home screen.</li>
			<li>When you are done reading the story then its time to make your charecters by clicking "Make Charecter"</li>
			<li>After Making your main charecter and your three crew members, Go to the "Next Steps" section and click "Head to Bellhorn"</li>
		</ul>
        <h3>Gameplay:</h3>
        <ul>
			<li>Once in town, you can click on town services.</li>
			<li>You will Be given writing prumps. You can write in your journal as much or as little as you wish. Try to tie each prompt into the overall arch of your story.</li>
			<li>Make sure to modify your stats as neccesary as you move through each prompt.</li>
			<li>When you are ready to explore out of Bellhorn click "Back to Map". From There you can explore more of the world</li>
			<li>Remember to add your own twist to the story. Does it cost something to move from town to town?</li>
			<li>As you move through the story you might want a new mission or charecter. Both can be done by heading back to "Begin" on the home screen and then click "Make Charecter" or "Make Mission"</li>
		</ul>
        <h3>Game Ends:</h3>
		<ul>
			<li>The game ends when you want it to.</li>
			<li>It can be when you complete your lifes goal or an important mission.</li>
			<li>It could also be when you fail a mision or lose all your health</li>
			<li>It is your story and you get to make the final call!</li>
		</ul>
        <h4>For more information please visit the <a href="../encyclopedia/index.html" target="_blank">Encyclopedia</a>.</h4>
        `;
});
