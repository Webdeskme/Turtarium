/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is a world you create.',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {
	
});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	"tavern": "tavern.png",
	"news": "news.png",
	"table": "table.png"
});


// Define the Characters
monogatari.characters ({
	'y': {
		name: 'Inn Keeper',
		color: '#5bcaff',
		sprites: {happy:'inkeeper.png', sad:'inkeeper-sad.png'}
	},
	'me': {
		name: 'Me',
		color: '#444444'
	},
	'n': {
		name: 'Narator:',
		color: '#888888'
	}
});

monogatari.script ({
	// The game starts here.
	'Start': [
		//'show scene #f7f6f6 with fadeIn',
		'show background tavern with fadeIn',
		'show character y happy at right with fadeIn',
		/*'show notification Welcome',
		{
			'Input': {
				'Text': 'What is your name?',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							name: ''
						}
					});
				},
				'Warning': 'You must enter a name!'
			}
		},
		'y Hi {{player.name}} Welcome to Monogatari!',*/
		'y Well hello there! What can I get you?',
		'me Whats the good word?',
		'show character y sad at right with fadeIn',
		"y Well the word is not that good at all I'm afraid.",
		"y Hear, take a look for yourself.",
		'hide character y with fadeOut',
		'show background news with fadeIn',
		"",
		"y See!",
		"n Denstraw Sinks; Many Died, All Lost Their Homes",
		"me Thats awful!",
		'show background table with fadeIn',
		'n Wow thats a lot to digest.',
		'n Did you have friends or family effected by this news?',
		'n What does this news mean to them?',
		'n These are some of the questions you will be asking yourself as you write your down your adventure for safe keeping.',
		'n keep track of not only the events that happen on your journey but what items and friends you have collected, along with how much money you currently have.',
		'n The first step is to determine who you are as a charecter and what are your personal traits.',
		'n It is important to keep your traits, skills, and life experiances in mind as you go on missions and begin adventuring.',
		'n Missions give you perpose as you move through the world.',
		'n You can generate missions and charecters for you and your friends by using the the Mission and Charecter generator bellow.',
		'n Also check out the encyclopidia to learn more about this world.',
		'n When you are ready to start playing go to the home screen and click on the title of the game to be brought to the world map.',
		'n You will always start your adventure from Bellhorn, your home town.',
		'n That is all you need to know. Now click the "Back to Home" button to get back to the home screen.',
		//'end'
	]
		/*{
			'Choice': {
				'Dialog': 'y What are you hoping to learn from me or from yourself?',
				'Rules': {
					'Text': 'The Laws of this land?',
					'Do': 'jump Rules'
				},
				'Make': {
					'Text': 'Who I am?',
					'Do': 'jump Make'
				},
				'Autism': {
					'Text': 'What is Autism?',
					'Do': 'jump Autism'
				},
			}
		}
	],

	'Rules': [
		'y Thats awesome!',
		'y Then you are ready to go ahead and create an amazing Game!',
		'y I can’t wait to see what story you’ll tell!',
		'end'
	],

	'Make': [

		'y You can do it now.',

		'show message Help',

		'y Go ahead and create an amazing Game!',
		'y I can’t wait to see what story you’ll tell!',
		'end'
	],
	'Autism': [
		'y Thats awesome!',
		'y Then you are ready to go ahead and create an amazing Game!',
		'y I can’t wait to see what story you’ll tell!',
		'end'
	]*/
});

