// Array of gratitude journal prompts
let gratitudePrompts = [
  "What are three things you are grateful for today?",
  "Describe a person you are grateful for and why.",
  "What is something you are looking forward to and why are you grateful for it?",
  "Write about a challenging experience and what you learned from it that you are grateful for.",
  "What is something you are grateful for in your home or living space?",
  "Describe a time when someone showed you kindness and how it made you feel.",
  "What is something you are grateful for about your health or well-being?",
  "Write about a book, film, music, poem, or any other recource that has helped you and why you are grateful for it.",
  "What is something you are grateful for in your relationships or friendships?",
  "Describe a time when you overcame a difficult situation and what you are grateful for about the experience.",
  "What is one thing you are grateful for about your childhood or upbringing?",
  "Write about a skill or talent you have and why you are grateful for it.",
  "What is something you are grateful for about your community or neighborhood?",
  "Describe a time when you received a surprise gift or gesture and how it made you feel.",
  "What is something you are grateful for about your daily routine or habits?",
  "Write about a place that holds special meaning to you and why you are grateful for it.",
  "What is something you are grateful for about your personal growth or self-improvement?",
  "Describe a time when you helped someone else and how it made you feel.",
  "What is something you are grateful for about your favorite hobby or activity?",
  "Write about a lesson you learned from a failure or mistake and why you are grateful for it.",
  "What is something you are grateful for about your support system or network?",
  "Describe a time when you practiced forgiveness and how it affected you.",
  "What is something you are grateful for about your creativity or self-expression?",
  "Write about a role model or mentor who has inspired you and why you are grateful for them.",
  "What is something you are grateful for about your ability to learn and adapt?",
  "Describe a time when you took a risk and what you are grateful for about the experience.",
  "What is something you are grateful for about your sense of humor or ability to find joy?",
  "Write about a time when you felt truly alive and why you are grateful for the experience.",
  "What is something you are grateful for about your connection to nature or the environment?",
  "Describe a time when you received a second chance or opportunity and how you are grateful for it.",
  "What is something you are grateful for about your resilience or ability to cope with challenges?"
];

// Function to choose a prompt at random
function choosePrompt() {
  let randomIndex = Math.floor(Math.random() * gratitudePrompts.length);
  let chosenPrompt = gratitudePrompts[randomIndex];
  return chosenPrompt;
}

// Choose a prompt and assign it to a variable
let currentPrompt = choosePrompt();
console.log(currentPrompt);


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
	"office": "office.png",
	"all": "all.png",
	"over": "over.png",
	"cat": "cat.png",
	"mind": "mind.png",
	"should": "should.png"
});


// Define the Characters
monogatari.characters ({
	'd': {
		name: 'Doctor',
		color: '#5bcaff',
		sprites: {happy:'dr.png', happy2:'dr2.png'}
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
		'show background office with fadeIn',
		'show character d happy at right with fadeIn',
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
		//'end'
	//]
		{
			'Choice': {
				'Dialog': 'd Well hello there! What would you like to work on today?',
				'graditude': {
					'Text': 'Graditude Journal',
					'Do': 'jump graditude'
				},
				'emotion': {
					'Text': 'Work on a negative emotion',
					'Do': 'jump emotion'
				}
			}
		}
	],
	'graditude': [
		'show character d happy2 at right with fadeIn',
		'd ' + currentPrompt,
		'd Throughout your day try and look for little things to be greatful for.',
		'show character d happy at right with fadeIn',
		'd Thank you for coming and working on yourself with me.',
		'd Please come back again soon.',
		'd Goodbye',
		'd You can press the "Back to Town" button below when you are ready to go back to town.',
		'end'
	],
	'emotion': [
		'show character d happy2 at right with fadeIn',
		'd Take a few moments to reflect on a recent situation that triggered a strong negative emotion in you. This could be a feeling of anxiety, sadness, anger, or frustration.',
		'd As you think about this situation, allow yourself to fully experience the emotion. Notice where you feel it in your body and how it affects your thoughts and behaviors.',
		"d Once you've identified the negative emotion, write it down or say it out loud. For example: " + '"I feel anxious when I think about public speaking."',
		'show character d happy at right with fadeIn',
		"d Now, let's take a closer look at this negative emotion. Ask yourself:",
		'd What is the specific situation or trigger that led to this emotion?',
		'd What are my thoughts about this situation? What am I telling myself?',
		'd How do I behave when I feel this emotion? Do I avoid certain situations or engage in unhelpful behaviors?',
		'd How does this emotion affect my relationships, work, or daily life?',
		'd Take your time to reflect on these questions, and write down your answers.',
		'show character d happy2 at right with fadeIn',
		'd As you review your thoughts and behaviors, look for any distorted or unhelpful thinking patterns.',
		'show background all with fadeIn',
		{
			'Choice': {
				'Dialog': 'd Does your thought inclued "All-or-nothing thinking" (e.g., "I' + "'" + 'm a complete failure if I make one mistake")',
				'alld': {
					'Text': 'Yes',
					'Do': 'jump alld'
				},
				'over': {
					'Text': "No",
					'Do': 'jump over'
				}
			}
		}
		],
		'alld': [
			'show character d happy at right with fadeIn',
			'd All-or-nothing thinking, also known as dichotomous thinking, is a cognitive distortion that involves viewing situations, people, or events as either entirely good or entirely bad, with no middle ground or nuance. This type of thinking is characterized by absolute and extreme language, such as "always," "never," "perfect," or "complete failure."',
			'd All-or-nothing thinking can increased stress and anxiety, low self-esteem, unrealistic expectations, difficulty with relationships, and missed opportunities.',
			"d To overcome all-or-nothing thinking, it's essential to challenge these distorted thoughts and replace them with more balanced and realistic ones. Here are some strategies to help you do so:",
			'd Practice self-compassion: Treat yourself with kindness and understanding, just as you would a friend.',
			'd Use nuanced language: Instead of using absolute language, try using more nuanced and realistic language, such as "I' + "'" + 'm doing my best" or "I' + "'" + 'm making progress."',
			'd Focus on the present moment: Rather than worrying about the future or past, focus on the present moment and what you can control.',
			'd Develop a growth mindset: View challenges and mistakes as opportunities for growth and learning, rather than as threats to your ego or self-worth.',
			'd Seek out diverse perspectives: Expose yourself to different viewpoints and experiences to broaden your understanding and challenge your all-or-nothing thinking.',
			'jump finish'
		],
		'over': [
			'show background over with fadeIn',
			'show character d happy2 at right with fadeIn',
			{
			'Choice': {
				'Dialog': 'd Does your thought inclued "Overgeneralization" (e.g., "I' + "'" + 'll never be able to speak in public")',
				'overd': {
					'Text': 'Yes',
					'Do': 'jump overd'
				},
				'cat': {
					'Text': "No",
					'Do': 'jump cat'
				}
			}
		}
		],
		'overd': [
			'show character d happy at right with fadeIn',
			"d Overgeneralization is a cognitive distortion that involves making sweeping conclusions or generalizations based on a single event, experience, or piece of evidence. This type of thinking involves taking a specific instance and applying it to all similar situations, often without considering the unique circumstances or context of each situation.",
			"d Overgeneralization can have negative consequences like limiting our potential, creating self-fulfilling prophecies, increasing anxiety and stress, damaging our self-esteem, and missing out on opportunities.",
			"d To overcome overgeneralization, it's essential to challenge these distorted thoughts and replace them with more balanced and realistic ones. Here are some strategies to help you do so:",
			"d Gather more evidence: Instead of relying on a single instance, gather more evidence and consider multiple perspectives before making a conclusion.",
			"d Look for exceptions: Identify exceptions to the rule and consider alternative explanations for the situation.",
			"d Focus on the present moment: Rather than worrying about the future or past, focus on the present moment and what you can control.",
			"d Practice self-compassion: Treat yourself with kindness and understanding, just as you would a friend.",
			"d Develop a growth mindset: View challenges and mistakes as opportunities for growth and learning, rather than as threats to your ego or self-worth.",
			"d To reframe overgeneralization, try to replace absolute language with more nuanced and realistic language.",
			'jump finish'
		],
		'cat': [
			'show background cat with fadeIn',
			'show character d happy2 at right with fadeIn',
			{
			'Choice': {
				'Dialog': 'd Does your thought inclued "Catastrophizing" (e.g., "If I mess up, it will be the end of my career")',
				'catd': {
					'Text': 'Yes',
					'Do': 'jump catd'
				},
				'mind': {
					'Text': "No",
					'Do': 'jump mind'
				}
			}
		}
		],
		'catd': [
			'show character d happy at right with fadeIn',
			"d Catastrophizing is a cognitive distortion that involves exaggerating the potential consequences of a situation or event, often to the point of predicting a catastrophic or disastrous outcome. This type of thinking involves assuming that the worst possible outcome will occur, and that it will have a devastating impact on one's life, career, or well-being.",
			"d Catastrophizing can increased anxiety and stress, decreased motivation, impaired decision-making, strained relationships, and missed opportunities.",
			"d To overcome catastrophizing, it's essential to challenge these distorted thoughts and replace them with more balanced and realistic ones. Here are some strategies to help you do so:",
			"d Reality-checking: Ask yourself if the catastrophic outcome is really likely to occur. What is the evidence for and against this outcome?",
			"d Probability estimation: Estimate the probability of the catastrophic outcome occurring. Is it really as high as you think?",
			"d Consequence evaluation: Evaluate the potential consequences of the catastrophic outcome. Would it really be as devastating as you think?",
			"d Coping skills: Identify your coping skills and resources that could help you deal with the potential consequences.",
			"d Reframing: Reframe the situation in a more positive or neutral light. Instead of focusing on the potential disaster, focus on the potential opportunities or benefits.",
			"d To reframe catastrophizing, try to replace absolute language with more nuanced and realistic language.",
			'jump finish'
		],
		'mind': [
			'show background mind with fadeIn',
			'show character d happy2 at right with fadeIn',
			{
			'Choice': {
				'Dialog': 'd Does your thought inclued "Mind reading" (e.g., "Everyone thinks I' + "'" + 'm incompetent")',
				'mindd': {
					'Text': 'Yes',
					'Do': 'jump mindd'
				},
				'should': {
					'Text': "No",
					'Do': 'jump should'
				}
			}
		}
		],
		'mindd': [
			'show character d happy at right with fadeIn',
			"d Mind reading is a cognitive distortion that involves assuming you know what others are thinking or feeling, without having any concrete evidence to support your assumptions. This type of thinking involves making inferences or interpretations about others' thoughts, feelings, or intentions, often based on incomplete or inaccurate information.",
			"d Mind reading can increased anxiety and stress, decreased self-esteem, impaired relationships, missed opportunities, and lack of communication.",
			"d To overcome mind reading, it's essential to challenge these distorted thoughts and replace them with more balanced and realistic ones. Here are some strategies to help you do so:",
			"d Ask for feedback: Instead of assuming you know what others are thinking, ask them directly for their opinion or feedback.",
			"d Look for evidence: Seek out concrete evidence to support your assumptions, rather than relying on intuition or guesswork.",
			"d Consider alternative explanations: Think about alternative explanations for others' behavior or words, rather than jumping to conclusions.",
			"d Practice active listening: Pay attention to what others are saying, both verbally and non-verbally, to get a more accurate understanding of their thoughts and feelings.",
			"d Focus on your own thoughts and feelings: Instead of trying to read others' minds, focus on your own thoughts and feelings, and take responsibility for your own emotions and actions.",
			"d To reframe mind reading, try to replace absolute language with more nuanced and realistic language.",
			'jump finish'
		],
		'should': [
			'show background should with fadeIn',
			'show character d happy2 at right with fadeIn',
			{
			'Choice': {
				'Dialog': 'd Does your thought inclued Should statements (e.g., "I should be able to speak in public without any problems")',
				'shouldd': {
					'Text': 'Yes',
					'Do': 'jump shouldd'
				},
				'finish': {
					'Text': "No",
					'Do': 'jump finish'
				}
			}
		}
		],
		'shouldd': [
			'show character d happy at right with fadeIn',
			"d Should statements are a type of cognitive distortion that involves making absolute and rigid demands on oneself or others. These statements often begin with the words " + '"should," "ought," or "must,"' + " and are typically accompanied by a sense of obligation, duty, or moral imperative.",
			"d Should statements can increased guilt and shame, decreased self-esteem, increased anxiety and stress, impaired relationships, and missed opportunities.",
			"d To overcome should statements, it's essential to challenge these distorted thoughts and replace them with more balanced and realistic ones. Here are some strategies to help you do so:",
			"d Identify the should statement: Become aware of when you're making should statements, and identify the specific words or phrases you're using.",
			"d Challenge the assumption: Ask yourself if the should statement is really true, or if it's based on an unrealistic expectation or assumption.",
			"d Replace with a more realistic statement: Replace the should statement with a more realistic and balanced statement, such as " + '"' + "I'd like to be able to speak in public without any problems, but it's okay if I make mistakes." + '"',
			"d Focus on the present moment: Instead of worrying about what you should be doing, focus on what you can do in the present moment to improve your situation.",
			"d Practice self-compassion: Treat yourself with kindness and understanding, just as you would a friend, and remind yourself that it's okay to make mistakes and have imperfections.",
			"d To reframe should statements, try to replace absolute language with more nuanced and realistic language.",
			'jump finish'
		],
		'finish': [
			'show background office with fadeIn',
			'show character d happy2 at right with fadeIn',
			"d Now, let's work on reframing the negative emotion by challenging and modifying these distorted or unhelpful thinking patterns. Ask yourself:",
			"d Is this thought really true, or is it an exaggeration?",
			"d Is there another way to look at this situation?",
			"d What evidence do I have for this thought, and what evidence do I have against it?",
			"d What would I say to a friend in a similar situation?",
			"d Use this information to reframe the negative emotion in a more balanced and constructive way.",
			'show character d happy at right with fadeIn',
			"d Now that you've reframed the negative emotion, practice using this new thought in your daily life. Repeat it to yourself regularly, especially when you're in situations that trigger the original negative emotion.",
			"d As you practice the reframed thought, pay attention to how it affects your emotions, behaviors, and relationships. Notice any positive changes or improvements.",
			"d Remember that reframing negative emotions takes time and practice. Be patient and compassionate with yourself as you work through this process.",
			'd Thank you for coming and working on yourself with me.',
			"d Remember to practice these skills regularly, and don't hesitate to seek support from a mental health professional if you need additional guidance or support.",
			'd Please come back again soon.',
			'd Goodbye!',
			'd You can press the "Back to Town" button below when you are ready to go back to town.',
			'end'
		]
});

