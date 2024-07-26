const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#4488aa',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

function preload() {
  this.load.image('bg', 'background.png'); // Correct if images are in the same folder as game.js
  this.load.image('player', 'player.png');
  this.load.image('villain', 'villain.png');
  this.load.image('platform', 'platform.png');
}

function create() {
  this.add.image(400, 300, 'bg'); // Adding background image
  this.add.image(200, 150, 'player'); // Adding player image
  this.add.image(600, 150, 'villain'); // Adding villain image
  this.add.image(400, 500, 'platform'); // Adding platform image
  
  // Example of adding a sprite with physics
  player = this.physics.add.sprite(400, 300, 'player');
  this.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  if (this.cursors.right.isDown) {
    player.setVelocityX(200);
  } else if (this.cursors.left.isDown) {
    player.setVelocityX(-200);
  } else {
    player.setVelocityX(0);
  }

  if (this.cursors.up.isDown) {
    player.setVelocityY(-200);
  } else if (this.cursors.down.isDown) {
    player.setVelocityY(200);
  } else {
    player.setVelocityY(0);
  }
}

const game = new Phaser.Game(config);










/*<!DOCTYPE html>
<html>
  <head>
  <title>
    Platformer
  </title>
  </head>
  <body>
    This is my Platformer
    <script src="phaser.min.js"></script>
   <script src='game.js'></script>
  </body>
</html>




const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#4488aa',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

function preload() {
  this.load.image('bg', 'background.png'); // Ensure paths are correct
  this.load.image('player', 'player.png');
  this.load.image('villain', 'villain.png');
  this.load.image('platform', 'platform.png');
}

function create() {
  this.add.image(400, 300, 'bg'); // Adding background image
  this.add.image(200, 150, 'player'); // Adding player image
  this.add.image(600, 150, 'villain'); // Adding villain image
  this.add.image(400, 500, 'platform'); // Adding platform image
  
  // Example of adding a sprite with physics
  player = this.physics.add.sprite(400, 300, 'player');
  this.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  if (this.cursors.right.isDown) {
    player.setVelocityX(200);
  } else if (this.cursors.left.isDown) {
    player.setVelocityX(-200);
  } else {
    player.setVelocityX(0);
  }

  if (this.cursors.up.isDown) {
    player.setVelocityY(-200);
  } else if (this.cursors.down.isDown) {
    player.setVelocityY(200);
  } else {
    player.setVelocityY(0);
  }
}

const game = new Phaser.Game(config);*/






/*const player = {}

preload () {
this.add.image('bg', 'background.png')
this.add.image('player', 'player.png')
this.add.image('villain', 'villain.png')
this.add.image('platform','platform.png')
}

create () {
this.add.physics.sprite(200, 300, 'player')
this.add.image(400, 400,'bg')
this.add.sprite(400, 300, 'villain')
this.add.sprite(400, -300, 'platform')

player.keys = this.input.keyboard.createCursorKeys()
}

update() {
if(player.keys.cursors.right.isDown) {
  return player.keys.setVelocityX(200)
} else if (player.keys.cursors.left.isDown) {
  return player.keys.setVelocityX(-200)
} else if (player.keys.cursors.up.isDown) {
  return player.keys.setVelocityY(200)
} else if (player.keys.cursors.down.isDown) {
  return player.keys.setVelocityY(-200)
} else {
  player.keys.x += 0
}
}


const config = {
  
  scene: {
    preload,
    create,
    update,
    width: 200,
    height: 200,
    physics: {
      default: 'arcade'
      arcade: {
        debug: false,
        width: 300,
        Gravity: {
          y: 100
        }
      }
    }
  }
  }



const game = new Phaser.Game(config)*/
