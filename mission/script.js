const form = document.getElementById('mission-form');
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
    const missionType = document.getElementById('mission-type').value;
    const mission = missionTypes[missionType].missions[Math.floor(Math.random() * missionTypes[missionType].missions.length)];
    const reward = missionTypes[missionType].rewards[Math.floor(Math.random() * missionTypes[missionType].rewards.length)];
    missionInfo.innerHTML = `
        <h2>Mission Briefing</h2>
        <p>${mission}</p>
        <h2>Reward</h2>
        <p>${reward}</p>
    `;
});
