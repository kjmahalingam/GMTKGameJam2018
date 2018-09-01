const loadState = {
  // automatically called
  preload: () => {
    // TODO: load images
    game.load.image('attackTower', 'Assets/Sprites/attack_tower.png');
    game.load.image('incomeTower', 'Assets/Sprites/income_tower.png');
    game.load.image('enemyBase', 'Assets/Sprites/enemy_base.png');

    // TODO: load audio

    // other setup
    game.stage.smoothed = false;
  },

  // automatically called
  create: () => {
    // TODO: play background music

    // start menu state
    game.state.start('play');
  }
}
