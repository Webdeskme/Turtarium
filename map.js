function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
let img = ['clearstall', 'brinemaw', 'cavewood'];
		img = shuffleArray(img);
config = {
        type: Phaser.AUTO,
		scale: {
		  mode: Phaser.Scale.FIT,
		  width: 1024,
		  height: 640,
		  autoCenter: Phaser.Scale.CENTER_BOTH
		},
        scene: {
            preload: preload,
            create: create,
            update: update
        }
	};

    var game = new Phaser.Game(config);

    function preload ()
    {
		console.log(img);
	this.load.image('map', 'imgs/map.png');
	this.load.image('home', 'imgs/house.png');
	this.load.image('reset', 'imgs/reset.png');
	this.load.image('town1', 'imgs/' + img[0] + '.png');
	this.load.image('town2', 'imgs/' + img[1] + '.png');
	this.load.image('town3', 'imgs/' + img[2] + '.png');
	this.load.image('town4', 'imgs/bellhorn.png');
	this.load.image('dip', 'imgs/dip.png');
	this.load.image('lift', 'imgs/lift.png');
	this.load.image('ocean', 'imgs/ocean.png');
    }

    function create ()
    {
		let url = [];
		url['clearstall'] = 'clearstall';
		url['brinemaw'] = 'brinemaw';
		url['cavewood'] = 'cavewood';
		console.log(url[img[0]]);
		this.add.image(512, 320, 'map').setScale(0.65);
		let home = this.add.image(950, 30, 'home').setInteractive({ useHandCursor: true  }).setScale(0.1);
		let reset = this.add.image(900, 30, 'reset').setInteractive({ useHandCursor: true  }).setScale(0.1);
		let town1 = this.add.image(850, 275, 'town1').setInteractive({ useHandCursor: true  }).setScale(0.75);
		let town2 = this.add.image(150, 250, 'town2').setInteractive({ useHandCursor: true  }).setScale(0.75);
		let town3 = this.add.image(150, 610, 'town3').setInteractive({ useHandCursor: true  }).setScale(0.75);
		let town4 = this.add.image(725, 610, 'town4').setInteractive({ useHandCursor: true  }).setScale(0.75);
		let dip = this.add.image(500, 400, 'dip').setInteractive({ useHandCursor: true  }).setScale(0.75);
		let lift = this.add.image(450, 610, 'lift').setInteractive({ useHandCursor: true  }).setScale(0.75);
		let ocean = this.add.image(500, 60, 'ocean').setInteractive({ useHandCursor: true  }).setScale(0.75);
		home.on('pointerdown', function(pointer) {
			window.location.href = './index.html';
		}, this);
		reset.on('pointerdown', function(pointer) {
			window.location.href = './map.html';
		}, this);
		town1.on('pointerdown', function(pointer) {
			window.location.href = './cities/' + url[img[0]] + '.html';
		}, this);
		town2.on('pointerdown', function(pointer) {
			window.location.href = './cities/' + url[img[1]] + '.html';
		}, this);
		town3.on('pointerdown', function(pointer) {
			window.location.href = './cities/' + url[img[2]] + '.html';
		}, this);
		town4.on('pointerdown', function(pointer) {
			window.location.href = './cities/bellhorn.html';
		}, this);
		dip.on('pointerdown', function(pointer) {
			window.location.href = './cities/dip.html';
		}, this);
		lift.on('pointerdown', function(pointer) {
			window.location.href = './cities/lift.html';
		}, this);
		ocean.on('pointerdown', function(pointer) {
			window.location.href = './cities/ocean.html';
		}, this);
    }

    function update ()
    {
    }
