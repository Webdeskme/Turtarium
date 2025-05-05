const form = document.getElementById('mission-form');
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
