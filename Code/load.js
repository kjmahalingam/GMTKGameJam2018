const loadState = {
  // automatically called
  preload: () => {
    game.load.image('attackTower', 'Assets/Sprites/attack_tower.png');
    game.load.image('incomeTower', 'Assets/Sprites/income_tower.png');
    game.load.image('detonateTower', 'Assets/Sprites/detonate_tower.png');
    game.load.image('enemyBase', 'Assets/Sprites/enemy_base.png');
    game.load.image('enemy', 'Assets/Sprites/enemy.png');
    game.load.image('button', 'Assets/Sprites/button.png');
    game.load.image('instruction', 'Assets/Sprites/instruction.png');

    game.load.audio('break', 'Assets/Audio/Break.wav');
    game.load.audio('explode', 'Assets/Audio/Explode.wav');
    game.load.audio('laser', 'Assets/Audio/Laser.wav');
    game.load.audio('shoot', 'Assets/Audio/Shoot.wav');
    game.load.audio('detonate', 'Assets/Audio/Detonate.wav');

    // other setup
    game.stage.smoothed = true;
  },

  // automatically called
  create: () => {
    // TODO: play background music

    // start menu state
    game.state.start('menu');
  }
}
