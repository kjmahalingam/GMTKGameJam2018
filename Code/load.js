const loadState = {
  // automatically called
  preload: () => {
    game.load.image('attackTower', 'Assets/Sprites/attack_tower.png');
    game.load.image('incomeTower', 'Assets/Sprites/income_tower.png');
    game.load.image('enemyBase', 'Assets/Sprites/enemy_base.png');
    game.load.image('enemy', 'Assets/Sprites/enemy.png');
    game.load.image('button', 'Assets/Sprites/button.png');

    // TODO: load audio

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
