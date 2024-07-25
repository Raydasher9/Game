const player = {}

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



const game = new Phaser.Game(config)
