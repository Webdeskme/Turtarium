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
	this.load.image('title', 'imgs/title.png');
	this.load.image('titleT', 'imgs/titleT.png');
	this.load.image('creditsT', 'imgs/creditsT.png');
	this.load.image('rulesT', 'imgs/rulesT.png');
	this.load.image('autism', 'imgs/autism.png');
	this.load.image('privacy', 'imgs/privacy.png');
    }

    function create ()
    {
		this.add.image(512, 320, 'title').setScale(1);
		let title = this.add.image(850, 320, 'titleT').setInteractive({ useHandCursor: true  }).setScale(1);
		let credits = this.add.image(960, 600, 'creditsT').setInteractive({ useHandCursor: true  }).setScale(0.75);
		let begin = this.add.image(1000, 400, 'rulesT').setInteractive({ useHandCursor: true  }).setScale(0.75);
		let autism = this.add.image(150, 50, 'autism').setInteractive({ useHandCursor: true  }).setScale(0.75);
		let privacy = this.add.image(175, 600, 'privacy').setInteractive({ useHandCursor: true  }).setScale(0.5);
		title.on('pointerdown', function(pointer) {
			window.location.href = './map.html';
		}, this);
		credits.on('pointerdown', function(pointer) {
			window.location.href = './credits.html';
		}, this);
		begin.on('pointerdown', function(pointer) {
			window.location.href = './begin/index.html';
		}, this);
		autism.on('pointerdown', function(pointer) {
			window.location.href = './autism.html';
		}, this);
		privacy.on('pointerdown', function(pointer) {
			window.open('https://theautismproject.org/privacy-policy', '_blank');
		}, this);
    }

    function update ()
    {
    }
