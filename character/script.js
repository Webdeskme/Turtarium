const form = document.getElementById('character-form');
const characterInfo = document.getElementById('character-info');

const missionInfo = document.getElementById('mission-info');

const missionTypes = {
    unity: {
        missions: [
            "Unite the five turtle cities to form an Oceanic Accord and prevent a rising seaquake prophecy.",
            "Forge peace between the surface dwellers and the people of The Great Dip.",
            "Help each turtle city confront its greatest fear: famine, civil unrest, spiritual corruption, war, and memory loss.",
            "Convince the wandering Moonkin to return to the ocean world with their lost wisdom.",
            "Rebuild the Moonlight Bridge between The Great Dip and The Great Lift."
        ],
        rewards: [
            "The ability to speak directly with turtle elders through Dreamshell communion",
            "A friendship so deep it can heal any wound, once per moon cycle",
            "A companion who was once your rival, now bound to your journey",
            "A boat that sails on trust and intent—able to reach forgotten islands",
            "An ocean gem that allows glimpses into your companion’s memories"
        ]
    },
    discovery: {
        missions: [
            "Discover the true purpose of The Great Lift and uncover what caused its civilization to vanish.",
            "Decode the ancient lunar script found in the lost domes of The Great Lift.",
            "Find and reawaken the slumbering turtle city known only in myths: Shellhaven.",
            "Complete the Ritual of Reflection to unlock the Mirror Path.",
            "Sail beyond the known ocean to find the hidden truth of the world’s origin."
        ],
        rewards: [
            "Access to an ancient lunar forge that reawakens memory-bound items",
            "A mask from The Great Dip that shows others as they truly are",
            "A seed from the First Garden on the moon—capable of growing into something mysterious",
            "The Echo Pearl, which lets you hear ancient oceanic whispers",
            "A map made of light and song that reveals itself through inner peace"
        ]
    },
    legacy: {
        missions: [
            "Craft the Oceanheart, a legendary relic to restore balance to the world.",
            "Retrieve lost relics of the Turtle Kings from the depths of The Great Dip.",
            "Document the oral histories of the ancient shell clans before they fade.",
            "Reignite the Celestial Beacon once used to guide ships from the moon.",
            "Create a new constellation in the Sky Archive with the moonlight stones."
        ],
        rewards: [
            "A unique relic that binds sea, sky, and memory together",
            "A chance to become part of the turtle cities' mythos as a Guardian of the Depths",
            "The right to name and guide a newborn turtle city",
            "Recognition by the Moon Archivists and access to their hidden knowledge",
            "A starlit crest that protects you from despair and illusion"
        ]
    },
    bonds: {
        missions: [
            "Help a companion confront a painful memory and grow stronger through it.",
            "Repair the broken bond between two rival turtle clans through dialogue and ritual.",
            "Deliver a long-lost letter from a sailor who vanished during The Great Drift.",
            "Organize a shared festival across two cities that have never celebrated together.",
            "Fulfill the dying wish of an old sea priest who once visited The Great Lift."
        ],
        rewards: [
            "A strengthened bond that unlocks a companion’s hidden ability",
            "The ability to summon a companion in times of emotional need",
            "A shared dream where a new power is born from unity",
            "A story-song that makes others trust you instantly",
            "A symbolic item imbued with deep emotional resonance"
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
        case 'avairi':
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

    if (skill1 === 'dexterity') dexterity += 2;
    //if (skill2 === 'dexterity') dexterity += 2;
    //if (skill3 === 'dexterity') dexterity += 2;
    if (disability === 'dexterity') dexterity -= 2;

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
	if(race == 'avairi'){
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
			<li>When you are done reading the story then its time to make your charecters by clicking "Make Charecter".</li>
			<li>Your skills don't play directly in the game. You use them as a marker for how to react when playing.</li>
			<li>After Making your main charecter and your three crew members, Go to the "Next Steps" section and click "Head to Bellhorn".</li>
		</ul>
        <h3>Gameplay:</h3>
        <ul>
			<li>Once in town, you can click on town services.</li>
			<li>You will Be given writing prumps. You can write in your journal as much or as little as you wish. Try to tie each prompt into the overall arch of your story.</li>
			<li>Make sure to modify your stats as neccesary as you move through each prompt.</li>
			<li>When you are ready to explore out of Bellhorn click "Back to Map". From There you can explore more of the world.</li>
			<li>Remember to add your own twist to the story. Does it cost something to move from town to town?</li>
			<li>As you move through the story you might want a new mission or charecter. Both can be done by heading back to "Begin" on the home screen and then click "Make Charecter" or "Make Mission".</li>
		</ul>
        <h3>Game Ends:</h3>
		<ul>
			<li>The game ends when you want it to.</li>
			<li>It can be when you complete your lifes goal or an important mission.</li>
			<li>It could also be when you fail a mision or lose all your health.</li>
			<li>It is your story and you get to make the final call!</li>
		</ul>
        <h4>For more information please visit the <a href="../encyclopedia/index.html" target="_blank">Encyclopedia</a>.</h4>
        `;
});
